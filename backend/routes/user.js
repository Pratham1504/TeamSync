const express = require('express')
const router = express.Router()

//controller function
const {loginUser,signupUser,userupdate,finduser} = require('../controllers/userController')

//login route
router.post('/login',loginUser)

//signup route
router.post('/signup',signupUser)

router.get('/:id',finduser)
router.patch('/:id',userupdate)

module.exports = router