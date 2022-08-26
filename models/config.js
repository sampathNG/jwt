const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const mongoose = require('mongoose')
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.on("error", err => {
  console.log("err", {err:err.message});
})
mongoose.connection.on("connected", (err, res) => {
  console.log("connected to database")
})