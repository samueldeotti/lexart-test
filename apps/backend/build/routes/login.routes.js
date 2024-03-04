"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = __importDefault(require("../controllers/loginController"));
const loginController = new loginController_1.default();
const router = (0, express_1.Router)();
router.post('/login', (req, res) => loginController.getUserInfo(req, res));
exports.default = router;
