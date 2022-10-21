const { check } = require("express-validator");
const { validateResult } = require("../../helpers/validateHelper");

const validateCreate = [
  check("Nombre", "Campo obligatorio").exists().not().isEmpty(),
  check("Nombre", "Máximo de caracteres: 30").isLength({ min: 0, max: 30 }),
  check("Apellido", "Campo obligatorio").exists().not().isEmpty(),
  check("Apellido", "Máximo de caracteres: 30").isLength({ min: 0, max: 30 }),
  check("DNI", "Ingrese un DNI correcto, el mismo debe contener 8 digitos")
    .isNumeric()
    .isLength({ min: 8, max: 8 }),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };
