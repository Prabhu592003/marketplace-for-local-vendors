const express = require("express");
let app = express();
const mongoose = require("mongoose");
let cors = require('cors');


const router = require('./controllers/login');
const router2 = require("./controllers/product");
const threadrouter = require("./controllers/threadcon");
// Middlewares
// To get request body and converts to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/public/images',express.static('public/images'))


mongoose.connect("mongodb://127.0.0.1:27017/Nearbyone").then(() => {
  console.log("Connected to DB");
});
 
app.use('/user',router);
app.use('/customer',router);
app.use('/product',router2);
app.use('/thread',threadrouter)

app.listen(5002, () => {
  console.log("Server listening at 5002");
});