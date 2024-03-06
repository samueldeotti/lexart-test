import { Product } from './ProductType';

export interface IProductModel {
  findAll(): Promise<Product[] | null>;
}
