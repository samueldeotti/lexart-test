"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../controllers/productsController"));
const validateJWT_1 = __importDefault(require("../middlewares/validateJWT"));
const productsController = new productsController_1.default();
const router = (0, express_1.Router)();
router.get('/', validateJWT_1.default, (req, res) => productsController.getProducts(req, res));
router.get('/:id', validateJWT_1.default, (req, res) => productsController.getProduct(req, res));
router.delete('/:id', validateJWT_1.default, (req, res) => productsController.deleteProduct(req, res));
router.put('/:id', validateJWT_1.default, (req, res) => productsController.updateProduct(req, res));
router.post('/', validateJWT_1.default, (req, res) => productsController.createProduct(req, res));
exports.default = router;
