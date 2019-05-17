const Joi = require("joi");

const schema = {
  a: Joi.number().min(1).max(5),
  b: Joi.number().min(6).max(9)
};

const value = {
  a: '10',
  b: '60'
};

async function a() {
  console.log(`a() called`);
  try {
    let res = await Joi.validate(value, schema, { abortEarly: false });
    console.log(`res= ${JSON.stringify(res, null, 2)}`);
  } catch (e) {
    console.log(`e= ${e.details.map(d => d.message)}`);
  }
}

a();