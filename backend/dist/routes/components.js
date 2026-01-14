"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const componentsService_1 = require("../services/componentsService");
const router = express_1.default.Router();
router.post("/transaction/create-session", async (req, res, next) => {
    try {
        const result = await (0, componentsService_1.createTransactionSession)(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
