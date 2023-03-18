const express = require('express')
const router = express.Router()
const {
    gettask,
    gettasks,
    createtask,
    deletetask,
    updatetask
} = require('../controllers/taskController')
const requireAuth = require('../middleware/requireAuth')

// require auth for all task routes
router.use(requireAuth)

//Get all tasks
router.get('/',gettask)
 
//GET a single task 
router.get('/:id',gettasks)

//POST a new task
router.post('/', createtask)

//DELETE a task
router.delete('/:id',deletetask)

//Update a task
router.patch('/:id',updatetask)

module.exports = router
