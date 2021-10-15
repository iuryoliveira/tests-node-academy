import express  from "express";
import { calculatorRouter } from "./routes/calculator.routes";

const app = express();

app.use(express.json());

app.use("/calculator", calculatorRouter);

export { app }
