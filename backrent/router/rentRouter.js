const express=require("express")
const { getpro, postpro, updatepro, deletepro, getprobyid } = require("../controllers/rentController")
const router=express.Router()


router.get("/",getpro)
router.post("/",postpro)
router.put("/:id",updatepro)
router.get("/:id",getprobyid)
router.delete("/:id",deletepro)

module.exports=router;