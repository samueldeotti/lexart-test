"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
const productService_1 = __importDefault(require("../service/productService"));
class ProductsController {
    constructor(productService = new productService_1.default()) {
        this.productService = productService;
    }
    async getProducts(_req, res) {
        const { status, data } = await this.productService.getProducts();
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async getProduct(req, res) {
        const { id } = req.params;
        const { status, data } = await this.productService.getProduct(Number(id));
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async deleteProduct(req, res) {
        const { id } = req.params;
        const { status, data } = await this.productService.deleteProduct(id);
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async createProduct(req, res) {
        const { name, brand, model, price, color } = req.body;
        const { status, data } = await this.productService.createProduct({ name, brand, model, price: Number(price), color });
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
    async updateProduct(req, res) {
        const { id } = req.params;
        const { name, brand, model, price, color } = req.body;
        const { status, data } = await this.productService.updateProduct(id, { name, brand, model, price: Number(price), color });
        return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
    }
}
exports.default = ProductsController;
