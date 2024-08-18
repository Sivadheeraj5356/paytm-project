
const mongoose = require('mongoose')
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
const User = mongoose.model("User" , userSchema)
module.exports ={
    User
}