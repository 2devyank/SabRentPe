const asyncHandler=require("express-async-handler");
const User = require("../model/usermodel");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv").config();

const registeruser=asyncHandler(async(req,res,next)=>{
const {name,email,password}=req.body
if(!name||!email||!password){
    res.status(400);
    throw new Error("provide everything")
    
}
const useravialable=await User.findOne({email})
if(useravialable){
    res.status(400)
    throw new Error("user already sleeping there")
}
const hashpassword=await bcrypt.hash(password,10);

const user=await User.create({
    name,
    email,
    password:hashpassword,
    role:"user"
})
if(user){
    res.status(201).json({_id:user.id,email:user.email})
}else{
    res.status(400)
    throw new Error("not valid data")
}
})
const loginuser=asyncHandler(async(req,res,next)=>{
const {email,password}=req.body
if(!email||!password){
    res.status(400)
    throw new Error("provide information")
}
const user=await User.findOne({email})
if(user && (await bcrypt.compare(password,user.password))){
    const accessToken=jwt.sign({
        user:{
            email:user.email,
            name:user.name,
            id:user.id
        }
    },process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:"15m"})
    res.status(200).json({accessToken});
}else{
    res.status(401)
    throw new Error("email or password invalid")
}
})

module.exports={registeruser,loginuser};