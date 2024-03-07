"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signupController_1 = __importDefault(require("../controllers/signupController"));
const signupController = new signupController_1.default();
const router = (0, express_1.Router)();
router.post('/', (req, res) => signupController.createUser(req, res));
exports.default = router;
