const { Todo } = require('../models')

function authorize(req, res, next) {
    let id = +req.params.id
    Todo.findByPk(id)
    .then((result) => {
        if(result) {
            if(result.UserId === req.loggedUser.id){
                next()
            } else {
                next({ name: 'Unauthorized' })
            }
        } else {
            next({ name: 'Error not found' })
        }
    })
    .catch((error) => {
        next(error)
    })
}

module.exports = authorize