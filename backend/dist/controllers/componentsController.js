"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transaction = void 0;
const componentsService_1 = require("../services/componentsService");
const transaction = async (req, res, next) => {
    try {
        console.log(req.body);
        const result = await (0, componentsService_1.createTransactionSession)(req.body);
        res.status(201).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.transaction = transaction;
