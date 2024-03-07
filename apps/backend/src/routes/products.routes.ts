import { Request, Response, Router } from "express";
import ProductsController from "../controllers/productsController";
import validateJWT from "../middlewares/validateJWT";

const productsController = new ProductsController();

const router = Router();  

router.get('/', validateJWT, (req: Request, res: Response) => productsController.getProducts(req, res));
router.get('/:id', validateJWT, (req: Request, res: Response) => productsController.getProduct(req, res));

router.delete('/:id', validateJWT, (req: Request, res: Response) => productsController.deleteProduct(req, res));

router.put('/:id', validateJWT, (req: Request, res: Response) => productsController.updateProduct(req, res));

router.post('/', validateJWT, (req: Request, res: Response) => productsController.createProduct(req, res));

export default router
