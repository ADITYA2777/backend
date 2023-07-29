
const express = require('express')
const {signup,signin,getUser,logout} = require('../controllers/authController.js');
const jwtAuth = require('../midleware/jwtAuth.js');
const authRoute = express.Router();



authRoute.post('/signup', signup);
authRoute.post('/signin', signin);
authRoute.get('/user',jwtAuth, getUser)
authRoute.get('/logout',jwtAuth,logout)

module.exports = authRoute;