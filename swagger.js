const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Azafran-API',
    description: 'API de Azafran para generar recetas'
  },
  host: 'localhost:8080'
};

const outputFile = './swagger-output.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc);