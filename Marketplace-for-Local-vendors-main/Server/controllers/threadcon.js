const express = require("express");
let cors = require('cors');
let threadrouter = express.Router();

const {createthread,getcustomerthread, getuserthread, createresponse, getresponses} = require('../services/threadservices');

threadrouter.post('/createthread',createthread);
threadrouter.get('/getcustomerthread',getcustomerthread);
threadrouter.get('/getuserthread',getuserthread);
threadrouter.post('/createresponse',createresponse);
threadrouter.get('/getresponses',getresponses);
module.exports = threadrouter;

