const express = require("express");
const joi = require('joi')
const path = require('path')
const validator = require('validator')
const nodemailer = require('nodemailer')
const contactSchema = require('./../Schema/contact.schema')
const fs = require('fs')


// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const Routes = express.Router();

// This will help us connect to the database
const dbo = require("../db/connexion");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const multerConfig = require('./../Middleware/multer');
const sendMail = require("../functions/sendMail");
const deleteFile = require("../functions/deleteFile");
const isAdmin = require("../Middleware/isAdmin");
// This section will help you get a list of all the records.


//Vérification s'il s'agit d'un admin

Routes.get('/isAdmin',isAdmin,function (req, res) {
  console.log('right !',req.mail)
  if(req.mail) return res.json('ok')
});

//Gestiond de la route pour l'envoi des messages de contactes

Routes.get('/verify-cv',isAdmin,(req,res) => {
    const directory = './File/CV';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        console.log('files',files)
        if(files.length){
            return res.json(true)
        } else{
            res.json(false)
        }
      });
})

Routes.delete('/cv',isAdmin,(req,res) => {
    console.log('ok')
    const directory = './File/CV';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        console.log('files',files)
        if(files.length){
                for (const file of files) {
                    fs.unlink(path.join(directory, file), err => {
                      if (err) throw err;
                    });
                }
        }
        
      });
      return res.json('right !')
})

Routes.post('/contact',multerConfig.single('file'),(req,res) => {
    console.log(req.body)
    delete req.body.recaptcha
    const {error,value} = contactSchema.validate(req.body)
    console.log(error)
    if(error && error.details.length){
        return  res.json({error:'Veuillez bien remplir le formulaire'})
    } else{
        if(!validator.isMobilePhone(req.body.tel)){
            return res.json({error:'Numero de téléphone invalide'})
        } else{
            /*
                S'il es nécessaire de stocker les informations dans une bd
                const date = new Date();
            */

                // nom unique du fichier 

                //const unique_name = value.name.toLowerCase()+ uuidv4().toString() ;

                // Download pdf

                console.log('pdf')

            if(value && value.file && value.objet === 'cv' && req.file){
                if(req.file.mimetype !== 'application/pdf'){
                    deleteFile(req.file.filename)
                    return res.json({error:'Veuillez télécharger un document pdf'})
                } else{
                    console.log('okay !',req.file)
                    if(req.file.size>10485760) {
                        deleteFile(req.file.filename)
                        return res.json({error:'La taille maximale de votre document pdf doit être inférieure 10Mo'})
                    }
                    sendMail(value,req.file,res)
                }
            } else{
                sendMail(value,req.file,res)
            }

            //Send Mail

                /*const transport = nodemailer.createTransport(
                        {
                            service: 'gmail',
                            auth: {
                            user: process.env.EMAIL,
                            pass: process.env.PASSWORD
                            }
                        }
                )

                const mailConfigurations = {
        
                    // It should be a string of sender email
                    from:`${value.name} <${value.email}>` ,
                    
                    // Comma Separated list of mails
                    to: process.env.EMAIL,
                
                    // Subject of Email
                    subject: "Message de contact depuis atoopro.fr",

                    attachments:req.file ? [
                        {   
                            path: './backend/File/CV/'+req.file.filename
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
                    if (error) throw Error(error);
                    console.log('Email Sent Successfully');
                    console.log(info);
                    if(info.messageId && info.accepted.includes(process.env.EMAIL)){
                        if(req.file && req.file.filename){
                            fs.unlink('./backend/File/CV/'+req.file.filename,(err) => {
                                if(err) return res.json({error:true})
                                return res.json({error:false})
                            })
                        }
                        return res.json({error:false})
                    }
                });*/
        }
    }
})

module.exports = Routes ;