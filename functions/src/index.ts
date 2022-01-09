import FunctionFactory from "./factories/functionFactory";
import { helloHandler } from "./routes/hello";

const functionFactory = new FunctionFactory();

export const hello = functionFactory.createFunction(helloHandler);
