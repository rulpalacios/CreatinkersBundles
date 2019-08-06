const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')

const app = express()
app.use(express.static('public'))
exports.app = functions.https.onRequest(app)

const { AuthController } = require('./components/auth/AuthController.js')
const { AdminController } = require('./components/auth/AdminController.js')

admin.initializeApp(functions.config().firebase)
exports.sendResetPassword = functions.https.onCall((email) => {
    new AdminController().resetPassword(email)
})

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    new AuthController(user).createdUser()
})

