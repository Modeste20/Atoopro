const nodemailer = require('nodemailer')

//Configuration du transport nodemailer
const transport = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            /*user: process.env.EMAIL,
            pass: process.env.PASSWORD*/
            type: "OAuth2",
            user: process.env.EMAIL,
            accessToken:process.env.ACCESSTOKEN,
            clientId: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
            refreshToken: process.env.REFRESHTOKEN
        }
    }
)


module.exports = transport

/*
    Soit on configure les paramètres des applications moins sécurisées qui compromets la sécurité du compte email
    Soit on configure la console google du compte gmail pour prendre en compte aAuth2
*/