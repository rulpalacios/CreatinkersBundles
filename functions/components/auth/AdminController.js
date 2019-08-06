// const functions = require('firebase-functions')
const admin = require('firebase-admin')
const { Mailer } = require('../utilities/Mailer.js')

class AdminController {

    sendMailToResetPassword(link, mail){
        return new Mailer().sendMail({
            link: link },
            mail,
            'd-f579a03c8a284d4b8121e11f95a24b41'
        )
        .then(() => {
            return 'Mail enviado.'
        })
        .catch( error => {
            console.error(error)
        })
    }

    resetPassword(email){
        admin.auth().generatePasswordResetLink(email)
                .then((link) => {
                    return this.sendMailToResetPassword(link, email)
                })
                .catch((error) => {
                    console.error(error)
                })
    }
}

exports.AdminController = AdminController