import { FunctionHandler } from "../types/functionHandler";
import { logger, Request, Response } from "firebase-functions";

export const createBaseHandler = (
  handlers: Record<string, FunctionHandler>,
  routeName: string
): FunctionHandler => {
  return async (request: Request, response: Response) => {
    const { method, body } = request;
    if (!handlers[method]) {
      logger.error({
        code: 404,
        message: `Bad request. Endpoint not found for ${method} ${request.baseUrl}.`,
      });
      response.status(404).end("Bad request. Endpoint not found.");
    }
    logger.info(`Received request to ${method} ${routeName}`, { body });
    return handlers[method](request, response);
  };
};
