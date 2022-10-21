const { kMaxLength } = require('buffer')
const {check, body} = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')


const validateCreate = [
    check('Nombre', 'Campo obligatorio')
    .exists()
    .not()
    .isEmpty(),
    check('Apellido', 'Campo obligatorio')
    .exists()
    .not()
    .isEmpty(),
    check('DNI', 'Ingrese un DNI correcto, el mismo debe contener 8 digitos')
    .isNumeric()
    .isLength({min:8 , max:8}),

    (req,res,next) => {
        validateResult(req,res,next)
    }

]

module.exports = {validateCreate}