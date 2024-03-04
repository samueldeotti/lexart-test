import { Request, Response, Router } from "express";
import LoginController from "../controllers/loginController";

const loginController = new LoginController();

const router = Router();  

router.post('/login', (req: Request, res: Response) => loginController.getUserInfo(req, res));

export default router