import { Request, Response } from 'express';
import mapStatusHTTP from "../utils/mapStatusHTTP";
import ProductService from '../service/productService';

export default class ProductsController {
  constructor(
    private productService = new ProductService(),
  ) { }

  public async getProducts(_req: Request, res: Response) {
    console.log('enotru')
    const { status, data } = await this.productService.getProducts();


    return res.status(mapStatusHTTP(status)).json(data);
  }
}
