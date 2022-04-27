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


Routes.get('/',(req,res) => {
    return res.json({api:'ok'})
})

Routes.get('/isAdmin',isAdmin,function (req, res) {
  console.log('right !',req.mail)
  if(req.mail) return res.json('ok')
});

//Gestiond de la route pour l'envoi des messages de contact

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
            console.log('right !',value)
            if(value.status !== 'emploi'){
                delete value.file
                if(req.file){
                    deleteFile(req.file.filename)
                }
            } else{
                delete value.societe
            }
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
        }
    }
})

module.exports = Routes ;