const express = require('express')
const router = express.Router()
const TodosController = require('../controllers/todoController')
const authorization = require('../middlewares/authorization')

router.get('/', TodosController.getTodos)
router.post('/', TodosController.postTodo)

router.use('/:id', authorization)
router.get('/:id', TodosController.getTodoById)
router.put('/:id', TodosController.putTodoById)
router.patch('/:id', TodosController.patchTodoById)
router.delete('/:id', TodosController.deleteTodoById)

module.exports = router