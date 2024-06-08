const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

const routeFiles = path.resolve(__dirname, './*.js');

// Swagger configuration options
const swaggerOptions = {
  swaggerDefinition: {
    swagger: '2.0',
    info: {
      title: 'Contacts API',
      description:
        'A simple contacts API. This was created as part of a project on creating a REST API with Node.js and Express.',
      version: '1.0.0'
    },
    host: process.env.HOST,
    basePath: '/',
    schemes: [process.env.HTTP_PROTOCOL],
    produces: ['application/json'],
    consumes: ['application/json'],
    definitions: {
      Contact: {
        type: 'object',
        required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'],
        properties: {
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          email: { type: 'string' },
          favoriteColor: { type: 'string' },
          birthday: { type: 'string', format: 'date' }
        }
      }
    }
  },
  apis: [routeFiles]
};

const uiOptions = {
  customSiteTitle: 'Contacts API',
  customCss: '.swagger-ui .topbar { display: none }'
}

// Initialize swagger-jsdoc
const swaggerDocument = swaggerJsDoc(swaggerOptions);

// const swaggerDocument = require('../swagger.json');

// Set up Swagger UI
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument, uiOptions));

module.exports = router;
