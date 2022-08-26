const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const jwt = require("jsonwebtoken")

function generateToken(userData){
    const token =jwt.sign({userData},process.env.SECRET)
    return token
}

function authenticateToken(req,res,next){
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (token == null) return res.sendStatus(401)
        jwt.verify(token,process.env.SECRET,(err)=>{
        if(err){
            console.log({err:err.meassage})
            res.send(err)
        }
        next()
    })
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {generateToken,authenticateToken}