const jwt = require("jsonwebtoken")
const {JWT_secret} = require("./config")

const authMiddleWare = (req, res, next)=>{
    const authHeader  = req.header.authorisation

    if(!authHeader || !authHeader.startsWith("Bearer")){
        res.status(403).json({
          msg : "invalid header"
        })
    }
     
    const token = authHeader.split(' ')[1];
   try{
    const decode = jwt.verify(token , JWT_secret)
     req.userId = decode.userId
     next();

   } catch(err){
      res.json({
        msg : " invalid user"
      })
   }

}
module.exports ={
    authMiddleWare
}