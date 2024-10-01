import Product from "../models/productModels.js"
import asyncHandler from "express-async-handler"

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
// Export function to get all products with pagination
export const getAllProducts = asyncHandler(async (req, res) => {
  const pageSize = 5 // Number of products per page
  const page = Number(req.query.pageNumber) || 1 // Current page number

  // Create keyword object for search functionality
  const keyword = req.query.keyword 
    ? { name: { $regex: req.query.keyword, $options: "i" } } 
    : {}
  
  // Count total products matching the keyword
  const count = await Product.countDocuments({...keyword})

  // Fetch products with pagination and keyword filter
  const products = await Product.find({...keyword})
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  if (products) {
    // Respond with products, current page, and total pages
    res.status(200).json({
      products,
      page,
      pages: Math.ceil(count / pageSize),
    })
  } else {
    // Handle case where no products are found
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


// @desc    Update products
// @route   PUT /api/products/:id
// @access  Private/admin
export const updateProduct = asyncHandler(async (req, res) => {
 const {name,price,description,image,brand,category,countInStock} = req.body

 const product = await Product.findById(req.params.id)

 if(product) {
  product.name = name
  product.price = price
  product.description = description
  product.image =image
  product.brand = brand
  product.category = category
  product.countInStock = countInStock

  const updatedProduct = await product.save()
  res.json(updatedProduct)
  }else{
    res.status(404)
    throw new Error("Product not found")

  }
 

})

// @desc    delete products
// @route   DELETE /api/products/:id
// @access  Private/admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if(product){
    await Product.deleteOne({_id: product._id})
    res.status(200).json("Product deleted")

  res.json({message: "Product removed"})
   }else{
     res.status(404)
     throw new Error("Product not found")
 
   }
  
 
 })


 // @desc    create a product review
// @route   POST /api/products/:id/reviews
// @access  Private
export const createProductReview = asyncHandler(async (req, res) => {
  const { rating , comment} = req.body
  const product = await Product.findById(req.params.id)

  if(product){
    const alreadyReviewed = product.reviews.find( (review) => review.user.toString() === req.user._id.toString())
    if(alreadyReviewed){
      res.status(400)
      throw new Error("Product alredy reviewed")
      
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating = product.reviews.reduce((acc,review) => acc + review.rating ,0) / product.reviews.length

    await product.save()
    res.status(201).json({message: "Review Added"})

  }else{
    res.status(404)
    throw new Error("Product not found")

  }


  
 
 })