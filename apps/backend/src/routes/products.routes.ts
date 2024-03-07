import { Request, Response, Router } from "express";
import ProductsController from "../controllers/productsController";

const productsController = new ProductsController();

const router = Router();  

router.get('/', (req: Request, res: Response) => productsController.getProducts(req, res));
router.delete('/:id', (req: Request, res: Response) => productsController.deleteProduct(req, res));
router.post('/', (req: Request, res: Response) => productsController.createProduct(req, res));

export default router
