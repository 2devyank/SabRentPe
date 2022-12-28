const express=require("express")
const { getpro, postpro, updatepro, deletepro, getprobyid } = require("../controllers/rentController")
const router=express.Router()
const path=require("path")
const multer=require("multer")
const {v4:uuidv4}=require('uuid');

const validataToken=require("../middleware/validateToken")
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images')
    },
    filename:(req,file,cb)=>{
        cb(null,uuidv4()+'-'+Date.now()+path.extname(file.originalname))
    }
})

const fileFilter=(req,file,cb)=>{
    const allowedfiletypes=['image/jpeg','image/jpg','image/png'];
    if(allowedfiletypes.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const upload=multer({storage,fileFilter})

router.use(validataToken);
router.route("/").get(getpro).post(upload.single('image'),postpro)
router.route("/:id").put(updatepro).get(getprobyid).delete(deletepro)


module.exports=router;