const express =require("express")
const app=express();
const cors=require("cors");
const dotenv=require("dotenv").config()
const mongoose=require("mongoose")
const errorHandler=require("./middleware/errorHandler")
// const bodyparser=require("body-parser");
const bodyParser = require("body-parser");

const port=process.env.PORT||3000


mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost/products")

app.use(express.json())
app.use(cors())
// app.use(bodyParser.json({limit:"30mb",extended:true}))
// app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use("/api/rent",require("./router/rentRouter"))
app.use("/api/user",require("./router/userRouter"))
app.use(errorHandler)


app.listen(port,()=>{
    console.log(`running on port ${port}`)
})