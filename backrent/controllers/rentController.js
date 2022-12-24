const express=require("express")
const router=express.Router();

const getpro=(req,res,next)=>{
    res.send("hello renter")
}
const postpro=(req,res,next)=>{
    res.send("hello post renter")
}
const getprobyid=(req,res,next)=>{
    res.send(`hello get id renter ${req.params.id}`)
}
const updatepro=(req,res,next)=>{
    res.send(`hello put renter ${req.params.id}`)
}

const deletepro=(req,res,next)=>{
    res.send(`hello deleted renter ${req.params.id}`)
}

module.exports={getpro,postpro,updatepro,deletepro,getprobyid};