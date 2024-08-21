
const mongoose = require('mongoose')
const { type } = require('os')
mongoose.connect('mongodb://localhost:27017/paytm')

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        required : true,
        unique : true,
        minLength : 3,
        maxlength : 30
        },
       
    password :{
        type : String,
        required : true ,
        minLength : 6,
        maxlength : 30
    } ,
    firstName :{
        type : String ,
        required : true

    },
    lastName :{
        type : String ,
        required : true

    }


})

const accountSchema = new mongoose.Schema({
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true
})
const User = mongoose.model("User" , userSchema)
const Account = mongoose.model("Account" , accountSchema)
module.exports ={
    User,
    Account

}