const express = require('express');
const { SignUp } = require('../controller/userController');
const { logIn } = require('../controller/userController');

const router = express.Router();


router.post('/signup', SignUp);

router.post('/login', logIn);

module.exports = router;