const swaggerJsdoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Rest with Nodejs Documentation",
    version: "1.0.1",
  },
  servers: [
    {
      url: "http://localhost:3001/api",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const openApiConfigration = swaggerJsdoc(options);

module.exports = openApiConfigration;
