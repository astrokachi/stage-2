import { NextFunction, Request, Response } from "express";

// errorHandler.js
export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(err.stack);

	if (res.headersSent) {
		return next(err);
	}

	res.status(500).json({ error: "Internal server error" });
};

