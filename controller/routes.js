const express = require('express');
const router = express.Router();
const {generateToken,authenticateToken} = require("../middleware/jwt")
const {signup,signin,getUser,get} =require("./controller.js");
const user = require("../models/user")
// USER SIGNUP
router.post("/post",signup)
// USER SIGNIN
router.post("/posts",signin)
// GET ALL USER DATA
router.get("/postss",authenticateToken,get)
module.exports = router;