const Joi = require("joi");

async function validateRequest(requestSchema, req, res, next) {
  const validations = ["headers", "params", "query", "body"].map(key => {
    const schema = requestSchema[key];
    const value = req[key];
    const validate = () =>
      schema ? schema.validate(value) : Promise.resolve({});
    return validate().then(result => ({ [key]: result }));
  });
  return Promise.all(validations)
    .then(result => {
      req.validated = Object.assign({}, ...result);
      next();
    })
    .catch(validationError => {
      // console.log(validationError);
      const message = validationError.details.map(d => d.message);
      // res.status(400).send(validationError);
      res.status(400).send(message);
    });
}


module.exports = {
  validateRequest
};
