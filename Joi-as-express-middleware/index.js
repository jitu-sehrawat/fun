const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Joi = require("joi");
const { validateRequest } = require("./validate");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = 3001;

app.get("/", (req, res) => res.send("Hello World!"));

//First define schema for the object
const alphaNum = Joi.string().alphanum();
const integer = Joi.number().integer();
const nameSchema = alphaNum.min(2).max(30);
const surnameSchema = alphaNum.min(2).max(50);
const birthYearSchema = integer.min(1900).max(2013);
const emailSchema = Joi.string().email();

const users = [
  {"name":"John","surname":"Johnson","brithdate":1980},
  {"name":"Andrew","surname":"Anderson","brithdate":1991,"email":"andrew@gmail.com"}
];

const getUsersSchema = {
  query: Joi.object({
    surname: Joi.string()
  }),
  headers: Joi.object({
    token: Joi.string().token().length(20).required()
  }).unknown() //unknown allows other headers like Content-Type etc.
};
app.get("/users",
  (req, res, next) => validateRequest(getUsersSchema, req, res, next),
  (req, res) => {
  const response = users.filter(
    u => req.query.surname === undefined || u.surname === req.query.surname
  );
  res.status(200).send(response);
});

const createUserSchema = {
  body: Joi.object().keys({
    name: nameSchema.required(),
    surname: surnameSchema.required(),
    birthYear: birthYearSchema.required(),
    mail: emailSchema.required()
  }),
  query: Joi.object({
  }),
  headers: Joi.object({
  }).unknown() //unknown allows other headers like Content-Type etc.
};
app.post("/users",
  (req, res, next) => validateRequest(createUserSchema, req, res, next),
  (req, res) => {
  res.status(200).send(req.validated.body);
});

const editUserSchema = {
  body: Joi.object().keys({
    name: nameSchema,
    surname: surnameSchema,
    birthYear: birthYearSchema,
    mail: emailSchema.required()
  }),
  params: Joi.object({
    id: Joi.string().alphanum().min(4)
  }),
  query: Joi.object({
  }),
  headers: Joi.object({
  }).unknown() //unknown allows other headers like Content-Type etc.
};
app.put("/users/:id",
  (req, res, next) => validateRequest(editUserSchema, req, res, next),
  (req, res) => {
  res.status(200).send(req.validated.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
