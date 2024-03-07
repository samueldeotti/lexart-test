import { Request, Response, Router } from "express";
import SignupController from "../controllers/signupController";

const signupController = new SignupController();

const router = Router();  

router.post('/', (req: Request, res: Response) => signupController.createUser(req, res));

export default router