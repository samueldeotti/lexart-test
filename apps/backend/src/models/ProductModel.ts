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

  async findById(id: number): Promise<Product | null> {
    const product = await this.model.findByPk(id);

    if (!product) return null;

    return product;
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

  async updateProduct(id: string, product: Product): Promise<string> {
    const updatedProduct = await this.model.update(product, { where: { id } });
    if (!updatedProduct) throw new Error('Product not found');

    return 'Product Updated';
  }

}