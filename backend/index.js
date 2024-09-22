import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectDb from "./config/Db.js"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js"
dotenv.config()

const app = express()

// DB connection
connectDb()

// body parse middleware
app.use(express.json())
app.use(express.urlencoded({extended :true}))

// cookie parse
app.use(cookieParser())


// Routes
app.use("/api/products",productRoutes)
app.use("/api/users",userRoutes)

// middleware routes
app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT,()=>{
    console.log(`Server lisening on ${process.env.PORT}` );
    
})