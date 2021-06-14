const ExpressError = require("./utils/ExpressError");
module.exports.requireLogin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    throw new ExpressError("You must be logged in", 400);
  } else next();
};
module.exports.isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    throw new ExpressError("Register as Admin First", 400);
  } else next();
};
