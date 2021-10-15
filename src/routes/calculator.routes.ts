import { Router } from "express";
import { Calculator } from "../utils/Calculator";

const calculatorRouter = Router();

calculatorRouter.post("/sum", (request, response) => {
  const { a, b } = request.body;
  
  const result = Calculator.Sum(a, b);

  return response.status(200).json({ result });
});

calculatorRouter.post("/subtract", (request, response) => {
  const { a, b } = request.body;
  
  const result = Calculator.Subtract(a, b);

  return response.status(200).json({ result });
});

export { calculatorRouter }
