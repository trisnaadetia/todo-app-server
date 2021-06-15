const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

function authenticate(req, res, next) {
    let { access_token } = req.headers
    if(access_token) {
        let decoded = verifyToken(access_token)
        User.findOne({
            where: {
                email: decoded.email
            }
        })
        .then((result) => {
            if(result) {
                req.loggedUser = {
                    id: result.id,
                    email: result.email
                }
                next()
            } else {
                next({ name: 'Invalid token' })
            }
        })
        .catch((error) => {
            next(error)
        })
        
    } else {
        next({ name: 'Please Login first' })
    }
}

module.exports = authenticate