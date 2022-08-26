const user = require("../models/user.js")
const {generateToken,authenticateToken} = require("../middleware/jwt")
const bcrypt = require("bcrypt");

exports.signup = async(req,res) => {
    try {
        const pass = await bcrypt.hash(req.body.password, 10);
        const userr = new user ({
            name:req.body.name,
            email:req.body.email,
            password:pass,
            phone:req.body.phone
        })
        const data  = await user.insertMany(userr);
        res.send("user signup successful")
        console.log("user signup successful")
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

exports.signin = async(req,res) => {
    try {
        const userdata = await user.findOne({email:req.body.email})
        if(userdata){
            const compare = await bcrypt.compareSync(req.body.password,userdata.password)
            if(compare){
                const token = generateToken(req.body)
                  res.status(200).send(token);
                console.log("login succesfull",token)
            }else{
            res.sendStatus(403).send("Forbidden")
                console.log("wrong password entered")
            }
        }else{
            res.sendStatus(404).send("Not Found")
            res.send("user not found")
            console.log("user not found")
        }
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

exports.get= async(req,res)=>{
    try {
        const data = await user.find()
        res.send(data)
        console.log(data)
    } catch (error) {
        res.send({error: error.message});
        console.log(error);
    }
}