import express from 'express';
import Cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import passport from 'passport';

const app = express();

const API_PORT = process.env.API_PORT || 3000;

const swaggerDefinition = {
  info: {
    title: `node-express-swagger`,
    version: `1.0.0`,
    description: `API to test the user registration routes`
  },
  host: `localhost:3003`,
  basePath: `/`,
  securityDefinition: {
    bearerAuth: {
      type: `apiKey`,
      name: `Authorization`,
      schema: `bearer`,
      in: `header`
    }
  }
};

const options = {
  swaggerDefinition,
  apis: [`./routes/*.js`]
};

const swaggerSpec = swaggerJSDoc(options);

app.get(`/swagger.json`, (req, res) => {
  res.setHeader(`Content-Type`, `application/json`);
  res.send(swaggerSpec);
});

require(`./config/passport`);

app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(passport.initialize());

app.use(`./routes/loginUser`)(app);
app.use(`./routes/registerUser`)(app);
app.use(`./routes/forgotPassword`)(app);
app.use(`./routes/resetPassword`)(app);
app.use(`./routes/updatePassword`)(app);
app.use(`./routes/updatePasswordViaEmail`)(app);
app.use(`./routes/findUser`)(app);
app.use(`./routes/deleteUser`)(app);
app.use(`./routes/updateUser`)(app);

app.listen(API_PORT, () => console.log(`Listening on port: ${API_PORT}`));

module.exports = app;