const login = require('./login')
const signup = require('./signup')
const user = require('./users')
const jwtMiddleware = require('../middlewares/jwtMiddleware')

const express = require("express");
router = express.Router();

router.use('/login', login)
router.use('/signup', signup)
router.use('/users', jwtMiddleware, user)

module.exports = router;
