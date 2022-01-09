import * as functions from "firebase-functions";

export type FunctionHandler = (
  request: functions.Request,
  response: functions.Response
) => void | Promise<void>;
