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
    async getProduct(id) {
        const product = await this.productModel.findById(id);
        if (!product)
            return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
        return { status: 'SUCCESSFUL', data: product };
    }
    async deleteProduct(id) {
        const deletedProduct = await this.productModel.delete(id);
        return { status: 'SUCCESSFUL', data: deletedProduct };
    }
    async createProduct(product) {
        const createdProduct = await this.productModel.createProduct(product);
        return { status: 'SUCCESSFUL', data: createdProduct };
    }
    async updateProduct(id, product) {
        const updatedProduct = await this.productModel.updateProduct(id, product);
        return { status: 'SUCCESSFUL', data: updatedProduct };
    }
}
exports.default = ProductService;
