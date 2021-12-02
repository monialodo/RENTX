import express from "express";
import swaggerUI from "swagger-ui-express";
import { router } from "./routes";

import swaggerFile from "./swagger.json";
import "./database"

//import databaseConnection from "./database";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

/*databaseConnection
    .then(() => {
        console.log("Database Connected");
        app.listen(3333, () => console.log("Server is running"));
    })
    .catch((error) => {
        console.error('Error: ', error.message);
    })*/
