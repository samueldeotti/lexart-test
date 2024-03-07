import { Request, Response } from 'express';
import mapStatusHTTP from "../utils/mapStatusHTTP";
import ProductService from '../service/productService';

export default class ProductsController {
  constructor(
    private productService = new ProductService(),
  ) { }

  public async getProducts(_req: Request, res: Response) {
    const { status, data } = await this.productService.getProducts();
    return res.status(mapStatusHTTP(status)).json(data);
  }
  public async getProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.productService.getProduct(Number(id));
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { status, data } = await this.productService.deleteProduct(id);
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async createProduct(req: Request, res: Response) {
    const { name, brand, model, price, color } = req.body;
    const { status, data } = await this.productService.createProduct({ name, brand, model, price: Number(price), color });
    
    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { name, brand, model, price, color } = req.body;
    const { status, data } = await this.productService.updateProduct(id, { name, brand, model, price: Number(price), color });
    
    return res.status(mapStatusHTTP(status)).json(data);
  }

}
