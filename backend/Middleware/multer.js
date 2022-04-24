const path = require('path')

const multer = require('multer');
const { v4: uuidv4 } = require('uuid');


    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            console.log(file)
          if(file.fieldname === 'file') return cb(null, './File/CV/')
        },
        filename: function (req, file, cb) {
            if(file.fieldname === 'file') return cb(null,'cv-' + uuidv4() + path.extname(file.originalname))
        }
    })

   module.exports = multer({storage:storage});//1Mo = 1 048 576 octets
