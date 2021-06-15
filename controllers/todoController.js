const { Todo } = require('../models')
const { verifyToken } = require('../helpers/jwt')

class TodosController {
    static getTodos(req, res, next) {
        let { access_token } = req.headers
        let decoded = verifyToken(access_token)

        Todo.findAll({
            where: {
                UserId : decoded.id
            }
        })
        .then((result) => {
            res.status(200).json(result)
            
        })
        .catch((error) => {
            next(error)
        })
    }

    static postTodo(req, res, next) {
        let { title, description, status, due_date } = req.body
        let { access_token } = req.headers
        let decoded = verifyToken(access_token)

        Todo.create({
            title,
            description,
            status,
            due_date,
            UserId: decoded.id
        })
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((error) => {
            next(error)
        })
    }

    static getTodoById(req, res, next) {
        let id = req.params.id

        Todo.findByPk(id)
        .then((result) => {
            if (result !== null) {
                res.status(200).json(result)
            } else {
                next({ name: 'Error not found' }) 
            }
        })
        .catch((error) => {
            next(error)
        })
    }

    static putTodoById(req, res, next) {
        let id = req.params.id
        let { title, description, status, due_date } = req.body

        Todo.update({
            title,
            description,
            status,
            due_date
        },{
            where: { id },
            returning: true
        })
        .then((result) => {
            if (result[0] === 0) {
                next({ name: 'Error not found' })
            } else {
                res.status(200).json(result[1])
            }            
        })
        .catch((error) => {
            next(error)
        })
    }

    static patchTodoById(req, res, next) {
        let id = req.params.id
        let { status } = req.body

        Todo.update({
            status
        },{
            where: { id },
            returning: true
        })
        .then((result) => {
            if (result[0] === 0) {
                next({ name: 'Error not found' })
            } else {
                res.status(200).json(result[1])
            }            
        })
        .catch((error) => {
            next(error)
        })
    }

    static deleteTodoById(req, res, next) {
        let id = req.params.id

        Todo.destroy({
            where: { id },
            returning: true
        })
        .then((result) => {
            if (result === 0) {
                next({ name: 'Error not found' })
            } else {
                res.status(200).json({ message: "Todo success to delete" })
            }            
        })
        .catch((error) => {
            next(error)
        })
    }
}

module.exports = TodosController