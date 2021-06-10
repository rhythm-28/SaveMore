const express = require("express");
const router = express.Router();
router.post("/admin/register", (req, res) => {
  //write your code here
  console.log(req.body);
});
module.exports = router;
