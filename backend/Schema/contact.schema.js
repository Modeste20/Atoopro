const joi = require('joi');

const contactSchema = joi.object({
    name:joi.string().required(),
    societe:joi.string(),
    email:joi.string().email().required(),
    tel:joi.string(),
    objet:joi.string().valid('cv','demo1','devis'),
    file:joi.string(),
    message:joi.string().required(),
    date:joi.date()
})

module.exports = contactSchema;