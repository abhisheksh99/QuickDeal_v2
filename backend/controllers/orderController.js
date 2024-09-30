import Order from "../models/orderModels.js"
import asyncHandler from "express-async-handler"

// @desc    Create new order
// @route   POST /api/order
// @access  Private
export const addOrderItems = asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body
  
    if (!orderItems || orderItems.length === 0) {
      res.status(400)
      throw new Error("No Order Items")
    } else {
      const order = new Order({
        orderItems: orderItems.map((x) => ({
          ...x,
          product: x._id,
          _id: undefined, 
        })),
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        user: req.user._id, 
      })
  
      const createdOrder = await order.save()
  
      res.status(201).json(createdOrder)
    }
  })

// @desc    Get logged in user order
// @route   GET /api/orders/myorders
// @access  Private
export const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({user: req.user._id})
    res.status(200).json(orders)
})


// @desc    Get order by id
// @route   GET /api/orders/:id
// @access  Private
export const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate("user" , "name email")

    if (order){
        res.status(200).json(order)
    } else {
        res.status(404)
        throw new Error("Order not found")
        
    }
})


// @desc    update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
export const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
    
  if(order){
    order.isPaid = true
    order.paidAt= Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address
    }
    const updatedOrder = await order.save()
    res.status(200).json(updatedOrder)
  }else{
    res.status(404)
    throw new Error("Order not Found");
    
  }
})

// @desc    update order to delivered
// @route   PUT /api/orders/:id/pay
// @access  Private/admin
export const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send("update order to delivered")
})

// @desc    get all orders
// @route   GET /api/orders/:id/pay
// @access  Private/admin
export const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user","id name")
  res.status(200).json(orders)

})
    