const express=require("express")
const router=express.Router();
const asyncHandler=require("express-async-handler");
const Product=require("../model/electricModel")
const fs=require("fs");
const path=require("path")
const multer=require("multer")
const {v4:uuidv4}=require('uuid');

const getpro=asyncHandler(async(req,res,next)=>{
    const product=await Product.find()
    res.status(200).json(product)
})

// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'images')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,uuidv4()+'-'+Date.now()+path.extname(file.originalname))
//     }
// })

// const fileFilter=(req,file,cb)=>{
//     const allowedfiletypes=['image/jpeg','image/jpg','image/png'];
//     if(allowedfiletypes.includes(file.mimetype)){
//         cb(null,true)
//     }else{
//         cb(null,false)
//     }
// }

// const upload=multer({storage,fileFilter})




const postpro=asyncHandler(async(req,res,next)=>{
    const{   prname, prtype,  description,  features,  mrent, deposit,dimensions}=req.body
    const image=req.file.path
    console.log(req.file)
    // if(!prname||!prtype||!description||!features||!mrent||!deposit||!dimensions){
    //     res.status(400);
    //     throw new Error("not provided")
    // }
    const product=await Product.create({
        prname,
        image,
        prtype,
        description,
        features,
        mrent,
        deposit,
        dimensions,
    })
    res.status(201).json(product)
})

const getprobyid=asyncHandler(async(req,res,next)=>{
    res.send(`hello get id renter ${req.params.id}`)
})
const updatepro=asyncHandler(async(req,res,next)=>{
    res.send(`hello put renter ${req.params.id}`)
})

const deletepro=asyncHandler(async(req,res,next)=>{
    res.send(`hello deleted renter ${req.params.id}`)
})

module.exports={getpro,postpro,updatepro,deletepro,getprobyid};