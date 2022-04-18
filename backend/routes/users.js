const {userSchema,loginUserSchema} = require('../Schema/users.schema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Router = require('express').Router()

const dbo = require('./../db/connexion')



Router.get('/',(req,res) => {
    let db_connect = dbo.getDb();
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
})


Router.post('/login',(req,res) => {
    console.log(req.body)
    const {error,value} = loginUserSchema.validate(req.body)
    if(error && error.details.length){
        return res.json({error:'form'})
    } else{
        let db_connect = dbo.getDb();

        db_connect
            .collection("users")
            .findOne({mail:value.mail}, function (err, result) {
                 if (err) throw err;
                        if(result && result.username){
                            console.log('result',result)
                            bcrypt.compare(value.password,result.password,(err,ans) => {
                                if(err) throw err
                                if(ans){
                                    console.log('right!')
                                    jwt.sign({
                                        mail:value.mail
                                      },process.env.SECRET_TOKEN, { expiresIn: '2h' },(err,token) => {
                                          if(err) throw err
                                          if(token){
                                              return res.json({
                                                  token:token
                                              })
                                          }
                                      });
                                } else{
                                    return res.json({
                                        error:'no-account'
                                    })
                                }
                            })
                        } else{
                            return res.json({
                                error:'no-account'
                            })
                        }
            });
    }
})





Router.post('/',/*authUser*/(req,res) => {
    console.log(req.body)
    const {error,value} = userSchema.validate(req.body)
    if(error && error.details.length){
        return res.json({error:'form'})
    } else{
        bcrypt.hash(value.password,10,(err,hash) => {
            if(err){
                return res.json({error:'hash'})
            } else{
                const user ={
                    username : value.username,
                    mail : value.mail,
                    password : hash
                }
                console.log(user)
                let db_connect = dbo.getDb();

                db_connect
                    .collection("users")
                    .findOne({mail:user.mail}, function (err, result) {
                        if (err) throw err;
                        if(result && result.username){
                            return res.json({error:'user-exist'})
                        } else{
                            db_connect.collection("users").insertOne(user, function (err, response) {
                                if (err) throw err;
                                res.json({data:response});
                              });
                        }
                    });

                
                /*
                const link = 'http://localhost:8081'
                const mailConfig = {
                    
                    from:`ATOO PRO <${process.env.EMAIL}>`,

                    to:`${user.username} <${user.mail}>` ,

                    // Subject of Email
                    subject: "Confirmation de compte Administrateur sur le site atoopro.fr",
                    
                    // This would be the text of email body
                    html: `<h1 style='color:#365561'>Veuillez confirmer votre compte Admin Atoopro</h1>
                    <p style='font-size:18px'>Un administrateur du site ATOO PRO vous invite à faire partir des administeateurs de ce site . Pour confirmer votre compte Admin , veuillez cliquer <a href=${link} style='color:#25A8E0'>Ici</a><br /> <br />

                    <b style='color:#365561'>Par L'équipe ATOOPRO</b>
                    </p>
                    `
                }

                transport.sendMail(mailConfig,(error,info) => {
                    if(error){
                        throw error;
                    }
                    console.log(info)
                    if(info.messageId && info.accepted.includes(user.mail)){
                        return res.json({
                            error:''
                        })
                    }
                })*/


            }
        })
        
    }
})

module.exports = Router