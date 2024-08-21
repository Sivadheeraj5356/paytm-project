const express = require('express');
const zod = require('zod')
const jwt = require("jsonwebtoken")
const { JWT_secret } = require('../config');
const { User } = require('../database');
const {authMiddleware} = require('../middleware');

const router = express.Router();


const signUpBody = zod.object({
    username : zod.string().email(),
    password : zod.string().min(6),
    firstName : zod.string(),
    lastName : zod.string(),
})
router.post('/signUp' , async(req,res)=>{
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

const signInBody = zod.object({
    username : zod.string().email(),
    password : zod.string().min(6)
})

router.post('/signIn' , async(req, res)=>{
    const obj = signInBody.safeParse(req.body)
    if(!obj.success){
       res.status(411).json({
        msg : "invalid inputs"
       })
    }
    const user = await user.findOne({
        username : req.body.username,
        password : req.body.password
    })
    if(user){
        const userId = user._id
      const token = jwt.sign( {userId}, JWT_secret)

      res.json({
        token : token
      })
    }

    res.status(411).json({
        msg : "user doesnt exist , sign up"
    })
})

const updatebody = zod.object({
    firstName : zod.string().optional(),
    lastName: zod.string().optional(),
    password : zod.string().optional()
})
router.put('/' , authMiddleware , async(req, res)=>{
      const obj = updatebody.safeParse(req.body)
      if(!obj.success){
         res.status(411).json({
            msg : "invalid inputs"
         })
      }
      await User.updateOne( {id : req.userId} , updatebody)
      res.json({
        msg : "updated successfully"
      })
})

router.get("/bulk" , async(req,res)=>{
    const filter = req.query.filter || ""
    
    const users = await User.find({
        $or : [{
              firstName:{
            "$regex" : filter
              } 
        },{
     lastName :{
        "$regex" : filter
     }
        }
    ]
    })

    res.json({
        user : users.map(user=>({
            username : user.username,
            firstName : user.firstName,
            lastName : user.lastName,
            _id : user._id

        }))
        
 } )

})
module.exports = router;