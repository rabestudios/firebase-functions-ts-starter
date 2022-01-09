import { FunctionHandler } from "../types/functionHandler";
import { createBaseHandler } from "../factories/handlerFactory";

const handleGet: FunctionHandler = (request, response) => {
  response.status(501).end("Method not implemented");
};

const handlePost: FunctionHandler = (request, response) => {
  response.status(501).end("Method not implemented");
};

const handlers: Record<string, FunctionHandler> = {
  POST: handlePost,
  GET: handleGet,
};

export const helloHandler = createBaseHandler(handlers, "api/hello");
