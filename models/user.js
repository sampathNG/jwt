const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{type: 'string',required: true},
    email:{type: 'string',required: true,unique: true},
    phone:{type: 'number',required: true},
    password:{type: 'string',required: true}
})

const users = mongoose.model("users",userSchema)
module.exports = users