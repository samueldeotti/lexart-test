import { Request, Response, Router } from "express";
import ProductsController from "../controllers/productsController";

const productsController = new ProductsController();

const router = Router();  

console.log('enotru')

router.get('/', (req: Request, res: Response) => productsController.getProducts(req, res));

export default router
