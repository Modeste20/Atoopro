const jwt = require('jsonwebtoken')

const isAdmin = (req,res,next) => {
    const headers = req.headers
    if(headers && headers.token){
        console.log('token',headers)
        jwt.verify(headers.token,process.env.SECRET_TOKEN,(err,decode) => {
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