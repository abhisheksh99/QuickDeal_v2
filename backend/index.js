import express from "express"
import dotenv from "dotenv"
import products from "./data/products.js"
dotenv.config()

const app = express()

app.get("/",(req,res)=>{
    res.send("lodu lalit")
   
    
})

app.get("/api/products",(req,res)=>{
    res.send(products)
})

app.get("/api/products/:id",(req,res)=>{
   const product = products.find((product)=> product._id=== req.params.id)
   res.send(product)
})


app.listen(process.env.PORT,()=>{
    console.log(`Server lisening on ${process.env.PORT}` );
    
})