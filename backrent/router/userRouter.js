const express=require("express");
const { registeruser, loginuser,currentuser } = require("../controllers/userController");

const validataToken=require("../middleware/validateToken")
const router=express.Router();

router.route("/register").post(registeruser);
router.route("/login").post(loginuser);
router.get("/current",validataToken,currentuser);
module.exports=router;