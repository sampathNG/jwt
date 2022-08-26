require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
const port = process.env.PORT ;
app.get('/', (req, res) => {
        res.send("Hello World!");
        console.log("Hello World!");
})
const r = require('./controller/routes.js')
app.use("/",r)
const connection = require("./models/config")


app.listen(port,console.log(`running on port number ${port}`));