// error handling middleware implicitly calls next, but eslint thinks it is unused so disable it.
/* eslint-disable @typescript-eslint/no-unused-vars */

import { type ErrorRequestHandler, type NextFunction, type Request, type Response } from "express";
import { isTypeIncomeInfo, type ResponseError } from "../types/types";

export const errorHandler: ErrorRequestHandler = (
    err: ResponseError,
    _req: Request,
    res: Response,
    next: NextFunction,
) => {
    res.status(err.status || 500);
    res.json({ error: err.message, ...(process.env.NODE_ENV !== "production" ? { stack: err.stack } : null) });
};

export const requestBodyErrorHandler = (req: Request, res: Response, next: NextFunction) => {
    if (!isTypeIncomeInfo(req.body)) {
        const error: ResponseError = new Error("The request body is incorrect.");
        error.status = 400;
        next(error);
    }
    if (req.body.income < 0) {
        const error: ResponseError = new Error("Income cannot be negative.");
        error.status = 400;
        next(error);
    }
    next();
};
