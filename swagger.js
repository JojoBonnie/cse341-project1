const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: "Contacts API",
        description: "A simple contacts API",
    },
    host: "localhost:3000",
    schemes: ['http', 'https'],
    definitions: {
        Contact: {
          type: "object",
          required: [
            "firstName",
            "lastName",
            "email",
            "favoriteColor",
            "birthday",
          ],
          properties: {
            firstName: { type: "string" },
            lastName: { type: "string" },
            email: { type: "string" },
            favoriteColor: { type: "string" },
            birthday: { type: "string", format: "date" },
          },
        },
    },
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)
