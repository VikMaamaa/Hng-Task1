const express = require('express')


const router = express.Router()



//import controllers
const {createUser, login, updateMessage} = require('../controllers/auth')

//specifying routes
router.post('/register', createUser)
router.put('/update', updateMessage)

module.exports = router;
