const express=require("express");
const { registeruser, loginuser } = require("../controllers/userController");

const router=express.Router();

router.route("/register").post(registeruser);
router.route("/login").post(loginuser);
module.exports=router;