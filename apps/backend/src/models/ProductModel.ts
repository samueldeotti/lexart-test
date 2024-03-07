import { IProductModel } from '../Interfaces/Products/IProductModel';
import { Product } from '../Interfaces/Products/ProductType';
import SequelizeProducts from '../database/models/ProductsModel';

export default class ProductModel implements IProductModel {
  private model = SequelizeProducts;

  async findAll(): Promise<Product[] | null> {
    const allProducts = await this.model.findAll();
    if (!allProducts) return null;

    return allProducts;
  }

  async delete(id: string): Promise<string> {
    const deletedProduct = await this.model.destroy({ where: { id } });
    if (!deletedProduct) return 'Product not found';

    return 'Product deleted';
  }

  async createProduct(product: Product): Promise<Product> {
    const createdProduct = await this.model.create(product);
    return createdProduct;
  }

}