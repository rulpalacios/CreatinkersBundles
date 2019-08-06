// const functions = require('firebase-functions')
const { Mailer } = require('../utilities/Mailer.js')

class AuthController {

    constructor(user){
        this.user = user
    }

    createdUser(){
        console.log(`${this.user.email} creado`)
        return new Mailer().sendMail({
            name: this.user.email },
            this.user.email,
            'd-3b75361fbfe4402f8d280bb26a12f7dd'
        )
        .then(() => {
            return 'Mail enviado.'
        })
        .catch( error => {
            console.error(error)
        })
    }
}

exports.AuthController = AuthController