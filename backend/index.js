const express = require("express");
const rootRouter = require("./routes/index.js")
const userRouter = require("./routes/user.js")
const cors = require("cors")
const app = express()
const zod = require('zod')
const jwt = require("jsonwebtoken");
const { User } = require("./database");
const {JWT_secret} = require("./config") 

app.use(cors())
app.use(express.json())
app.use('/api/v1',rootRouter)

app.listen(3000)