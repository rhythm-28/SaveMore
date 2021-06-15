const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../model/user/auth");
const { requireLogin } = require("../../middlewares");
const Product = require("../../model/product");
const ExpressError = require("../../utils/ExpressError");
router.post("/api/user/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});
router.post("/api/user/signup", async (req, res) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;
    const isAdmin = false;
    const user = new User({ username, email, firstName, lastName, isAdmin });
    const newUser = await User.register(user, password);
    req.login(newUser, function (err) {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(newUser);
      }
    });
  } catch (err) {
    res.send({ error: err });
  }
});
router.get("/api/currentUser", (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.status(404).send({ err: "No user found" });
  }
  //const { username, _id, firstName, lastName, email } = req.user;
});
router.get("/api/user/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});
router.get("/add/product/:productId", requireLogin, async (req, res) => {
  const product = await Product.findOne({
    name: req.params.productId.replace("%20", " "),
  });
  const user = await User.findById(req.user.id);
  const productInfo = await User.find(
    {
      _id: req.user.id,
      "products.name": product.name,
    },
    { _id: 0, "products.$": 1 }
  );
  if (productInfo.length > 0) {
    await User.updateOne(
      {
        _id: req.user.id,
        "products.name": product.name,
      },
      {
        $set: {
          "products.$.quantity": productInfo[0].products[0].quantity + 1,
        },
      }
    );
  } else {
    const bought = {
      name: product.name,
      price: product.discountPrice,
      quantity: 1,
      image: product.images[0].url,
    };
    user.products.push(bought);
    await user.save();
  }
  const newUser = await User.findById(req.user.id);
  res.send(newUser.products);
});
router.get("/decrease/product/:productId", requireLogin, async (req, res) => {
  const product = await Product.findOne({
    name: req.params.productId.replace("%20", " "),
  });
  const user = await User.findById(req.user.id);
  const productInfo = await User.find(
    {
      _id: req.user.id,
      "products.name": product.name,
    },
    { _id: 0, "products.$": 1 }
  );
  if (productInfo.length > 0) {
    await User.updateOne(
      {
        _id: req.user.id,
        "products.name": product.name,
      },
      {
        $set: {
          "products.$.quantity": Math.max(
            productInfo[0].products[0].quantity - 1,
            0
          ),
        },
      }
    );
  } else {
    throw new ExpressError("You dont have this product", 404);
  }
  const newUser = await User.findById(req.user.id);
  res.send(newUser.products);
});
router.get("/remove/product/:productId", requireLogin, async (req, res) => {
  const product = await Product.findOne({
    name: req.params.productId.replace("%20", " "),
  });
  const user = await User.findById(req.user.id);
  await User.updateOne(
    { _id: req.user.id },
    { $pull: { products: { name: product.name } } }
  );
  const newUser = await User.findById(req.user.id);
  res.send(newUser.products);
});
router.get("/get/user/products", requireLogin, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.send(user.products);
});
module.exports = router;
