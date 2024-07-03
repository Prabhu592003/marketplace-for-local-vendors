const express = require("express");
let cors = require('cors');
let router = express.Router();

const {createUser,checkuser,createcustomer,checkcustomer} = require('../services/loginServices');

router.post('/register',createUser);
router.post('/login',checkuser);
router.post('/registercus',createcustomer)
router.post('/logincus',checkcustomer)
module.exports = router;
