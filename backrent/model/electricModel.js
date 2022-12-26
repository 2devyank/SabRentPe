const mongoose=require("mongoose")

const productschema=mongoose.Schema({
    prname:{
        type:String,
        required:[true]
    },
    prtype:{
        type:String,
        required:[true]
    },
    description:{
        type:String,
        required:[true]
    },
    image:{
        type:Buffer,
        contentType:String,
    },
    mrent:{
        type:Number,
        required:[true],
    },
    deposit:{
        type:Number,
        required:[true]
    },
    features:{
        type:[String],
        required:[true]
    },
    dimensions:{
        type:String
    },
},{
    timestamps:true
})
module.exports=mongoose.model("Product",productschema)