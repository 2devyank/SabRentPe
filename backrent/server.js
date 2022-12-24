const express =require("express")
const app=express();
const dotenv=require("dotenv").config()

const port=process.env.PORT||3000
app.use("/api/rent",require("./router/rentRouter"))

app.listen(port,()=>{
    console.log(`running on port ${port}`)
})