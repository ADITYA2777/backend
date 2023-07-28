
const express = require('express')
const {signup,signin} = require('../controllers/authController.js')
const authRoute = express.Router()



authRoute.post('/signup', signup)
authRoute.post('/signin', signin)

module.exports = authRoute;