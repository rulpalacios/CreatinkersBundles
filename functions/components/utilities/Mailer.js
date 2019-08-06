const functions = require('firebase-functions')
const sgMail = require('@sendgrid/mail')

class Mailer {

    constructor(){
        const SENDGRID_API_KEY = functions.config().sendgrid.key
        sgMail.setApiKey(SENDGRID_API_KEY)
    }

    sendMail(data, email, templateId){
        console.log(data)
        const msg = {
            to: email,
            from: '<noreply@creatinkers.com>',
            templateId: templateId,
            substitutionWrappers: ['{{', '}}'],
            dynamic_template_data: data
        }
    
        return sgMail.send(msg);
    }
}

exports.Mailer = Mailer