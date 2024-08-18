const express = require('express')

const Router = express.Router();
Router.use('/user' ,userRouter)
module.exports = Router;