const express=require("express")
const router=express.Router();
const asyncHandler=require("express-async-handler");
const Product=require("../model/electricModel")
const fs=require("fs");
const path=require("path")

const getpro=asyncHandler(async(req,res,next)=>{
    const product=await Product.find()
    res.status(200).json(product)
})
const postpro=asyncHandler(async(req,res,next)=>{
    const{   prname, prtype,  description,  features,  mrent,  deposit,  image,dimensions}=req.body
    if(!prname||!prtype||!description||!features||!mrent||!deposit||!dimensions){
        res.status(400);
        throw new Error("not provided")
    }
    const product=await Product.create({
        prname,
        prtype,
        description,
        features,
        mrent,
        deposit,
        image,
        dimensions,
        image:{
            data:fs.readFileSync
        }
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