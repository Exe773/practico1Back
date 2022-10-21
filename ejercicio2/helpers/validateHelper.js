const { validationResult } = require("express-validator");

const errorFormatter = ({ msg }) => {
  return `${msg}`;
};

const validateResult = (req, res, next) => {
  try {
    validationResult(req).formatWith(errorFormatter).throw();
    return next();
  } catch (err) {
    res.status(403).send({ errors: err.mapped() });
  }
};

module.exports = { validateResult };
