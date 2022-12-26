const express=require("express")
const { getpro, postpro, updatepro, deletepro, getprobyid } = require("../controllers/rentController")
const router=express.Router()


router.route("/").get(getpro).post(postpro)
router.route("/:id").put(updatepro).get(getprobyid).delete(deletepro)


module.exports=router;