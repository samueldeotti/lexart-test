import ProductsModel from '../models/ProductModel';
import { IProductModel } from '../Interfaces/Products/IProductModel';
import { ServiceResponse } from '../types/ServiceResponse';
import { Product } from '../Interfaces/Products/ProductType';

export default class ProductService {
  constructor(
    private productModel: IProductModel = new ProductsModel(),
  ) { }

  public async getProducts(): Promise<ServiceResponse<Product[] | null>> {
    const allProducts = await this.productModel.findAll();

    return { status: 'SUCCESSFUL', data: allProducts  };
  }
}
