import Product from "../models/productModels.js"
import asyncHandler from "express-async-handler"

// @desc
// @route
// Type

export const getAllProducts = asyncHandler(async(req,res)=>{
    const products = await Product.find({})
    if(products){
        res.status(200).json(products)
    }
    else{
        res.status(404).json({message:"Products not found"})
    }

})




// @desc
// @route
// Type

export const getProductById = asyncHandler(async(req,res)=>{
    
    const product = await Product.findById(req.params.id)
    if(product){
        res.status(200).json(product)
    }
    else{
        res.status(404).json({message:"Product not found"})
    }

})