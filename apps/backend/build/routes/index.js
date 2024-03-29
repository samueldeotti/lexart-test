"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_routes_1 = __importDefault(require("./login.routes"));
const products_routes_1 = __importDefault(require("./products.routes"));
const signup_routes_1 = __importDefault(require("./signup.routes"));
const router = (0, express_1.Router)();
router.use('/login', login_routes_1.default);
router.get('/products', products_routes_1.default);
router.get('/signup', signup_routes_1.default);
exports.default = router;
