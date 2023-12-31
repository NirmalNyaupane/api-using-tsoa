import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./config/database.config";
const app = express();

/*************** globals middlewares *****************************/
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import errorHandler from "./middlewares/error.middleware";
import EnvConfiguration from "./config/env.config";
import './controller/restaurant.controller';
import swaggerUi from 'swagger-ui-express';
import {Request, Response} from 'express';
import { RegisterRoutes } from '../build/routes';
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(cors());
app.use(helmet());

app.use("/api-docs", swaggerUi.serve, async (request:Request, response:Response)=>{
  return response.send(swaggerUi.generateHTML(await import("./../public/swagger.json")))
})
RegisterRoutes(app);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});

app.use(cookieParser());
app.use(limiter);

//global error handler
app.use(errorHandler);

AppDataSource.initialize().then(() => {
  console.log("Datasource initialized");
  app.listen(EnvConfiguration.PORT, () => {
    console.log(`Server started at port ${EnvConfiguration.PORT}`);
  });
});
app.listen(4000, () => {
  console.log("hello world");
});
