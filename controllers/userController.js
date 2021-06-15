const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const { OAuth2Client } = require('google-auth-library')

class UserController {
    static register(req, res, next) {
        let { username, email, password } = req.body

        User.create({
            username,
            email,
            password
        })
        .then((result) => {
            res.status(201).json({
                id: result.id,
                username: result.username, 
                email: result.email
            })
        })
        .catch((error) => {
            next(error)
        })
    }

    static login(req, res, next) {
        let { email, password } = req.body
        User.findOne({
            where: { email }
        })
        .then((result) => {
            if(!result) {
                next({ name: 'Invalid Password or Email' })
            } else {
                const isPasswordMatch = comparePassword(password, result.password)

                if(!isPasswordMatch) {
                    next({ name: 'Invalid Password or Email' })
                } else {
                    const token = generateToken({
                        id: result.id,
                        email: result.email
                    })
                    res.status(200).json({ 
                        id: result.id, 
                        email: result.email, 
                        access_token: token 
                    })
                }
            }
        })
        .catch((error) => {
            next(error)
        })
    }

    static googleLogin(req, res, next) {
        const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
        const id_token = req.body.id_token
        let email = null
        let username = null
        let password = Math.ceil(Math.random()*1000000000) + 'passwordGoogle'


        const client = new OAuth2Client(GOOGLE_CLIENT_ID)

        client.verifyIdToken({
            idToken: id_token,
            audience: GOOGLE_CLIENT_ID
        })
        .then((ticket) => {
            const payload = ticket.getPayload()
            username = payload.given_name
            email = payload.email
            
            return User.findOne({
                where: {
                    email
                }
            })

        })
        .then((result) => {
            if(result) {
                return result
            } else {
                return User.create({
                    username,
                    email,
                    password
                })
            }
            
        })
        .then((result) => {
            const token = generateToken({
                id: result.id,
                email: result.email
            })
            res.status(200).json({ 
                id: result.id, 
                email: result.email, 
                access_token: token
            })
            
        })
        .catch((error) => {
            next(error)
        })

    }
}

module.exports = UserController