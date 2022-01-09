import { FunctionHandler } from "../types/functionHandler";
import { https, HttpsFunction } from "firebase-functions";

class FunctionFactory {
  public createFunction(handler: FunctionHandler): HttpsFunction {
    return https.onRequest(handler);
  }
}

export default FunctionFactory;
