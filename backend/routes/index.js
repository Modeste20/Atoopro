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

//utilisation de modules nodejs

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

//Vérifier si le dossier contient un fichier ou pas

Routes.get('/verify-cv',isAdmin,(req,res) => {
    const directory = './File/CV';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        console.log('files',files)

        //Si le répertoire contient des fichiers

        if(files.length){
            return res.json(true)
        } else{
           return res.json(false)
        }
      });
})

//Supprimer le dossier CV sur le server si jamais il contient de fichiers
Routes.delete('/cv',isAdmin,(req,res) => {
    console.log('ok')
    const directory = './File/CV';
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        console.log('files',files)

        //Si le répertoire contient des fichiers

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

//Gestion de la route pour l'envoi des messages de contact


Routes.post('/contact',multerConfig.single('file'),(req,res) => {
    console.log(req.body)
    delete req.body.recaptcha
    //Validons req.body 
    const {error,value} = contactSchema.validate(req.body)
    console.log(error)
    if(error && error.details.length){
        return  res.json({error:'form'})
    } else{
        // S'il n'y a pas d'erreur 

        //Vérification du numero de téléphone
        if(!req.body.tel.match(/^\+[0-9]{1,4} [0-9]{6,10}$/)){
            return res.json({error:'numero'})
        } else{
            console.log('right !',value)
            //Si l'utilisateur est en quête d'emploi , il ne peut pas choisir une societe
            //Si l'utilisateur travaille dans une entreprise , il peut pas déposer un cv

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


                console.log('pdf')

                //Y a t'il téléchargement de cv ?

            if(value && value.file && value.objet === 'cv' && req.file){
                // Si oui , vérification si le fichier téléchargé est un pdf 
                if(req.file.mimetype !== 'application/pdf'){
                    // si non , retourner une erreur au client après avoir supprimer le fichier sur le serveur
                    deleteFile(req.file.filename)
                    return res.json({error:'pdf'})
                } else{
                    //Si oui , vérifier si sa taille est inférieure à 10Mo
                    console.log('okay !',req.file)
                    if(req.file.size>10485760) {
                        deleteFile(req.file.filename)
                        return res.json({error:'size-file'})
                    }
                    //si oui , envoyer le mail
                    sendMail(value,req.file,res)
                }
            } else{
                //S'il n'y a pas téléchargement de cv , envoyer directement le mail
                sendMail(value,req.file,res)
            }
        }
    }
})

module.exports = Routes ;