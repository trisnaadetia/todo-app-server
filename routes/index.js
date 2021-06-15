const express = require('express')
const router = express.Router()
const todosRoute = require('./todosRoute')
const UserController = require('../controllers/userController')
const ApiController = require('../controllers/apiController')
const authentication = require('../middlewares/authentication')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/googleLogin', UserController.googleLogin)
router.get('/news', ApiController.getNews)
router.get('/prayer', ApiController.getPrayerTime)
router.use('/todos', authentication, todosRoute)

module.exports = router