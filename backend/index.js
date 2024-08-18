const express = require("express");
const rootRouter = require(".routes/index.js")
const cors = require("cors")
const app = express()
const zod = require('zod')
const JWT_token = require("jsonwebtoken")

app.use(cors())
app.use(express.json())
app.use('/api/v1',rootRouter)
app.use('/api/v1/user' , userRouter)

const signUpBody = zod.object({
      username : zod.string().email()
})
app.post('/signup' , (req,res)=>{
    const body = req.body
})
app.listen(3000)