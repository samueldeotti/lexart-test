"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsModel_1 = __importDefault(require("../database/models/ProductsModel"));
class ProductModel {
    constructor() {
        this.model = ProductsModel_1.default;
    }
    async findAll() {
        const allProducts = await this.model.findAll();
        if (!allProducts)
            return null;
        return allProducts;
    }
    async findById(id) {
        const product = await this.model.findByPk(id);
        if (!product)
            return null;
        return product;
    }
    async delete(id) {
        const deletedProduct = await this.model.destroy({ where: { id } });
        if (!deletedProduct)
            return 'Product not found';
        return 'Product deleted';
    }
    async createProduct(product) {
        const createdProduct = await this.model.create(product);
        return createdProduct;
    }
    async updateProduct(id, product) {
        const updatedProduct = await this.model.update(product, { where: { id } });
        if (!updatedProduct)
            throw new Error('Product not found');
        return 'Product Updated';
    }
}
exports.default = ProductModel;
