"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
class ProductService {
    constructor(productModel = new ProductModel_1.default()) {
        this.productModel = productModel;
    }
    async getProducts() {
        const allProducts = await this.productModel.findAll();
        return { status: 'SUCCESSFUL', data: allProducts };
    }
    async deleteProduct(id) {
        const deletedProduct = await this.productModel.delete(id);
        return { status: 'SUCCESSFUL', data: deletedProduct };
    }
    async createProduct(product) {
        const createdProduct = await this.productModel.createProduct(product);
        return { status: 'SUCCESSFUL', data: createdProduct };
    }
}
exports.default = ProductService;
