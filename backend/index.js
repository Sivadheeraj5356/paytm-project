const express = require("express");
const rootRouter = require("./routes/index.js")
const cors = require("cors")
const app = express()
const zod = require('zod')
const jwt = require("jsonwebtoken");
const { User } = require("./database");
const {JWT_secret} = require("./config") 

app.use(cors())
app.use(express.json())
app.use('/api/v1',rootRouter)
app.use('/api/v1/user' , userRouter)

const signUpBody = zod.object({
      username : zod.string().email(),
      password : zod.string(),
      firstName : zod.string(),
      lastName : zod.string(),
})
app.post('/signup' , async(req,res)=>{
    const body = req.body
    const {success} = signUpBody.safeParse(req.body)
    if(!success){
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
app.listen(3000)