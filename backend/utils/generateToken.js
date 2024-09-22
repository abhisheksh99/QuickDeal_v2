import jwt from "jsonwebtoken"

const generateToken = (res, userId) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn:"1d"
    })

    //SET Jwt as HTTP-only cookie
    res.cookie("jwt",token,{
        httpOnly:true,
        secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
        sameSite:"strict",
        maxAge:1*24*60*60*1000 //1 day
    })
}

export default generateToken