import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/userModels.js"

// Protect Routes
export const protect = asyncHandler(async(req, res, next) => {
    let token
    
    // Read jwt from cookie
    token = req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select("-password")
            next()
        } catch (error) {
            res.status(401)
            throw new Error("Not authorized, token failed")
        }
    } else {
        res.status(401)
        throw new Error("Not authorized, no token")
    }
})

// Admin middleware
export const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next()
    } else {
        res.status(401)
        throw new Error("Not authorized as admin")
    }
}