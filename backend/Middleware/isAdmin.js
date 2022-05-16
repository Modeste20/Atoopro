const jwt = require('jsonwebtoken')

//Vérifier s'il s'agit d'un admin

const isAdmin = (req,res,next) => {
    const headers = req.headers
    //Vérifier si le headers contient une clé token
    if(headers && headers.token){
        console.log('token',headers)
        //si oui vérifier si le token contient une info valid
        jwt.verify(headers.token,process.env.SECRETTOKEN,(err,decode) => {
            if(err) throw err
            if(decode && decode.mail){
                console.log('decode',decode)
                req.mail = decode.mail;
                next()
            } else{
                return res.json({error:'token'})
            }
        })
    } else{
        return res.json({error:'token'})
    }
}

module.exports = isAdmin