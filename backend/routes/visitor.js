const { visitorSchema } = require('../Schema/visitor.schema')

const  Router = require('express').Router()

const dbo = require('./../db/connexion')
const moment = require('moment')
const isAdmin = require('../Middleware/isAdmin')
const { text } = require('express')

// gestion des visiteurs du sites

//Récupérer les visiteurs du sites

Router.get('/',isAdmin,(req,res) => {
    let db_connect = dbo.getDb();

    db_connect
        .collection("visitor")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            if(result && Array.isArray(result)){

                // Si l'utilisateur est connecté il y a deux jours , on le supprime de la base de donnée

                result.forEach((value,i) => {
                    console.log()
                    const dateNow= moment()
                    const date = moment(value.date)
                    const days = dateNow.diff(date,'days')

                    console.log(days)
    
                    if(days>=2){
                        db_connect
                        .collection("visitor")
                        .deleteOne({ip:value.ip})
                    }
                })
            }
            
        })

        // Envoi au client des visteurs actuels (visiteurs connectés il y a moins de 5minutes)

        // des pays des utilisateurs

        db_connect
        .collection("visitor")
        .find({})
        .toArray((err,visitors) => {
            if(err) throw err;
            else{
                db_connect.collection('visitor')
                .distinct('country',(err,response) => {
                    if(err) throw err
                    if(response){
                        const countryArray = [];

                            if(response && Array.isArray(response) && response.length){
                                response.forEach(c => {
                                    if(c){
                                        countryArray.push({text:c,value:c})
                                    }
                                })
                            }
                        console.log('response',response)
                        console.log('countryArray',countryArray)
                        return res.json({visitors:visitors.filter(c => moment().diff(moment(c.date),'minutes') <= 5),last2DayVisitor:visitors,
                    countryArray})
                    }
                })
            }
        });
})

//Post des visiteurs , visiteurs uniques par ip

Router.post('/',(req,res) => {
    console.log(req.body)
    const {error,value} = visitorSchema.validate(req.body);
    if(error && error.details.length){
        return res.json({error:'info-incomplete'})
    } else{
        const date = new Date();
        const visitor = {
            country:value.country,
            ip:value.ip,
            date
        }

        let db_connect = dbo.getDb();

                db_connect
                    .collection("visitor")
                    .findOne({ip:visitor.ip,country:value.country}, function (err, result) {
                        if (err) throw err;
                        if(result && result.country){
                            db_connect.collection("visitor")
                            .updateOne({
                                ip:visitor.ip,
                                country:visitor.country
                            },{$set:{date:new Date()}},{upsert:true},(error,response) => {
                                if(error) throw error
                                if(response){
                                    res.json({data:'ok'})
                                }
                            })
                        } else{
                            db_connect.collection("visitor").insertOne(visitor, function (err, response) {
                                if (err) throw err;
                                console.log('response2',response)
                                if(response && response.insertId){
                                    res.json({data:response.insertId});
                                }
                              });
                        }
                    });
    }
})

module.exports = Router