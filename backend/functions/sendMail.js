const nodemailer = require('nodemailer')
const fs = require('fs');
const transport = require('./transporter');
const app =require('express')()

const sendMail = (value,file,res) => {
    

const mailConfigurations = {

    // It should be a string of sender email
    from:`${value.name} <${value.email}>` ,
    
    // Comma Separated list of mails
    to: process.env.EMAIL,

    // Subject of Email
    subject: "Message de contact depuis atoopro.fr",

    attachments:file ? [
        {   
            path: './File/CV/'+file.filename
        },
    ] : null,
    
    // This would be the text of email body
    html: `<h1 style='color:#365561'>${'Contenu du message'}</h1>
    <p style='font-size:18px'>${value.message}<br /> <br />
    Par <b style='color:#365561'>${value.name} </b> , <span style='color:#25A8E0'> ${value.email} </span> ${value.societe ? 'de la société <b style="color:#365561">' + value.societe +'</b>' : ''}</h4>
    </p>
    `
};

console.log(process.env.EMAIL)

transport.sendMail(mailConfigurations, function(error, info){
    if (error) res.json({error:'error'});

    console.log('Email Sent Successfully');
    console.log(info);
    if(info.messageId && info.accepted.includes(process.env.EMAIL)){
        if(file && file.filename){
            fs.unlink('./backend/File/CV/'+file.filename,(err) => {
                if(err) return res.json({error:''})
                return res.json({error:''})
            })
        }
        return res.json({error:''})
    }
});
}

module.exports = sendMail