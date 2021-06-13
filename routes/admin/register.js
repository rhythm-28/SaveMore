const express = require("express");
const Admin = require("../../model/admin/register");
const User = require("../../model/user/auth");
const router = express.Router();
router.post("/admin/register", (req, res) => {

  console.log(req.user);
  const adminData = req.body;

  const newAdmin = new Admin(
    {
      storeName: adminData.storeName,
      category: adminData.category,
      pincode: adminData.pinCode,
      address: adminData.address,
      city: adminData.city,
      state: adminData.state,
      country: adminData.country,
      gstRegistrationNumber: adminData.gstIn
    }
  );

  newAdmin.save(function(){
    User.findByIdAndUpdate(req.user._id, {
      isAdmin: 'true',
      adminId: newAdmin._id
     },
      function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
});
  });



});
module.exports = router;
