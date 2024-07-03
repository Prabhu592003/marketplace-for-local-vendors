const express = require("express");
let cors = require('cors');
let router2 = express.Router();
const multer = require("multer");
const upload = multer({ dest: 'public/images' });


const {createproduct,getcustomerproduct,getuserproduct} = require('../services/productservices');

router2.post('/createproduct',upload.single('image') ,createproduct);
router2.get('/getcustomerproduct',getcustomerproduct);
router2.get('/getuserproduct',getuserproduct)

module.exports = router2;