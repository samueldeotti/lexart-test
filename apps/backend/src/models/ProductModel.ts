import { IProductModel } from '../Interfaces/Products/IProductModel';
import { Product } from '../Interfaces/Products/ProductType';
import SequelizeProducts from '../database/models/ProductsModel';

export default class ProductModel implements IProductModel {
  private model = SequelizeProducts;

  async findAll(): Promise<Product[] | null> {
    const allProducts = await this.model.findAll();
    if (!allProducts) return null;

    console.log(allProducts)
    return allProducts;
  }
}