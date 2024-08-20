const express = require('express');
const zod = require('zod')
const jwt = require("jsonwebtoken")
const { JWT_secret } = require('../config');
const { User } = require('../database');
const {authMiddleware} = require('../middleware')

const router = express.Router();


const signUpBody = zod.object({
    username : zod.string().email(),
    password : zod.string().min(6),
    firstName : zod.string(),
    lastName : zod.string(),
})
router.post('/signup' , async(req,res)=>{
  const body = req.body
  const obj = signUpBody.safeParse(req.body)
  if(!obj.success){
      return res.status(411).json({
          msg : "invaid inputs"
      })
  }

 const existingUser = await User.findOne({
  username : req.body.username
 })
 if(existingUser){
  return res.status(411).json({
      msg : "user already exists"
  })
 }
 const user = await User.create({
    username : req.body.username,
    password : req.body.password,
    firstName : req.body.firstName,
    lastName : req.body.lastName
 })

 const userId = user._id;

 const jwt_token = jwt.sign( {userId} , JWT_secret)

 res.json({
  msg : "iser created successfully" ,
  token : jwt_token
 })

})
module.exports = router;