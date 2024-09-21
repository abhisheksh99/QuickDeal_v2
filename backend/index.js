import express from "express"
import dotenv from "dotenv"
import products from "./data/products.js"
import connectDb from "./config/Db.js"
import productRoutes from "./routes/productRoutes.js"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js"
dotenv.config()

const app = express()
connectDb()

app.use(notFound)
app.use(errorHandler)

app.use("/api/products",productRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server lisening on ${process.env.PORT}` );
    
})