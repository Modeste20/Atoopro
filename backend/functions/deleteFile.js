const fs = require('fs')

const deleteFile = (filename) => {
    fs.unlink('./File/CV/'+filename,(err) => {
        if(err) throw new Error(err.message)
    })
}
module.exports = deleteFile