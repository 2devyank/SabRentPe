const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already taken"]
    },
    password:{
        type:String,
        required:[true,"enter password"]
    },
    role:{
        type:String
    }

})
module.exports=mongoose.model("User",userschema);