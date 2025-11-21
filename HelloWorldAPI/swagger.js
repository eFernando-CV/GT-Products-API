import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API Documentation for your project",
    },
    servers: [
      {
        url: "http://localhost:3000", 
        description: "Local Dev Server",
      },
    ],
  },
    apis: ["./src/routes/**/*.js"]
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
export { swaggerUi };
