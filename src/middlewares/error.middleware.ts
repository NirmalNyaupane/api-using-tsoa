import { NextFunction, Request, Response } from "express";
import EnvConfiguration from "../config/env.config";
import ApiError from "../utils/ApiError";
import { ValidateError } from "tsoa";

const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode = error?.statusCode ?? 500;
    const message = error?.message ?? "Something went wrong";
    error = new ApiError(statusCode, message, error?.errors, err.stack);
  }

  const resonse = {
    ...error,
    message: error.message,
    ...(EnvConfiguration.NODE_ENV === "development"
      ? { stack: error.stack }
      : {}),
  };

  res.status(error.statusCode).json(resonse);
};

export default errorHandler;
