"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../controllers/productsController"));
const productsController = new productsController_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => productsController.getProducts(req, res));
router.delete('/:id', (req, res) => productsController.deleteProduct(req, res));
router.post('/', (req, res) => productsController.createProduct(req, res));
exports.default = router;
