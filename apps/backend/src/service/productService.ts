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

  public async deleteProduct(id: string): Promise<ServiceResponse<string>> {
    const deletedProduct = await this.productModel.delete(id);

    return { status: 'SUCCESSFUL', data: deletedProduct };
  }

  public async createProduct(product: Product): Promise<ServiceResponse<Product>> {
    const createdProduct = await this.productModel.createProduct(product);

    return { status: 'SUCCESSFUL', data: createdProduct };
  }


}
