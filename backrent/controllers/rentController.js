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

const postpro=asyncHandler(async(req,res,next)=>{
    const{   prname, prtype,  description,  features,  mrent, deposit,dimensions}=req.body
    const image=req.file.path
    console.log(req.file)
    if(!prname||!prtype||!description||!features||!mrent||!deposit||!dimensions){
        res.status(400);
        throw new Error("not provided")
    }
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
    const product=await Product.findById(req.params.id)
    if(!product){
        res.status(404)
        throw new Error("not having this product")
    }
    res.status(200).json(product);
})


const updatepro=asyncHandler(async(req,res,next)=>{
    const product=await Product.findById(req.params.id)
    if(!product){
        res.status(404)
        throw new Error("not having this product")
    }

    const productupdate=await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )


    res.status(200).json(productupdate);
})

const deletepro=asyncHandler(async(req,res,next)=>{
    const product=await Product.findById(req.params.id)
    if(!product){
        res.status(404)
        throw new Error("not having this product")
    }
    const deleteproduct=await Product.findByIdAndDelete(req.params.id);

    res.send(`hello deleted renter ${req.params.id}`)
})

module.exports={getpro,postpro,updatepro,deletepro,getprobyid};