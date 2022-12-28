const mongoose=require("mongoose")

const productschema=mongoose.Schema({
    prname:{
        type:String,
        required:[true,"name not provided"]
    },
    prtype:{
        type:String,
        required:[true,"type not provided"]
    },
    description:{
        type:String,
        required:[true,"description not provided"]
    },
    image:{
        type:String,
        required:[true,"image not provided"]
    },
    mrent:{
        type:Number,
        required:[true,"please define rent"]
    },
    deposit:{
        type:Number,
        required:[true,"please define deposit"]
    },
    features:{
        type:[String],
        required:[true,"addd features"]
    },
    dimensions:{
        type:String
    },
    quantity:{
        type:String
    }
},{
    timestamps:true
})
module.exports=mongoose.model("Product",productschema)