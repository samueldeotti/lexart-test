import { Product } from './ProductType';

export interface IProductModel {
  findAll(): Promise<Product[] | null>;
  delete(id: string): Promise<string>;
  createProduct(product: Product): Promise<Product>;
}
