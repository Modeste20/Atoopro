const joi = require('joi')

const visitorSchema = joi.object({
    ip:joi.string().required(),
    country:joi.string().required()
})

module.exports = {visitorSchema}