import Product from "../models/productModels.js"
import asyncHandler from "express-async-handler"

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  if (products) {
    res.status(200).json(products)
  } else {
    res.status(404)
    throw new Error("Products not found")
  }
})

// @desc    Fetch single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.status(200).json(product)
  } else {
    res.status(404)
    throw new Error("Product not found")
  }
})


// @desc    create a products
// @route   POST /api/products
// @access  Private/admin
export const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample name",
    price: 0.0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample Category",
    countInStock: 0,
    numReviews:0,
    description: "Sample description"

  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
 
})
