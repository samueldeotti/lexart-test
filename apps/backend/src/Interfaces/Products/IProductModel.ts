import { Product } from './ProductType';

export interface IProductModel {
  findAll(): Promise<Product[] | null>;
  findById(id: number): Promise<Product | null>;
  delete(id: string): Promise<string>;
  createProduct(product: Product): Promise<Product>;
  updateProduct(id: string, product: Product): Promise<string>;
}
