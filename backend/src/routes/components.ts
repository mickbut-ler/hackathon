import express, { Request, Response, NextFunction } from "express";
import { createTransactionSession } from "../services/componentsService";

const router = express.Router();

router.post(
    "/transaction/create-session",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await createTransactionSession(req.body);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
);

export default router;
