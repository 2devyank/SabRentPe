const express =require("express")
const app=express();
const dotenv=require("dotenv").config()
const mongoose=require("mongoose")
const errorHandler=require("./middleware/errorHandler")
const port=process.env.PORT||3000


mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost/products")

app.use(express.json())
app.use("/api/rent",require("./router/rentRouter"))
app.use(errorHandler)


app.listen(port,()=>{
    console.log(`running on port ${port}`)
})