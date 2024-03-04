import { Request, Response } from 'express';
import mapStatusHTTP from "../utils/mapStatusHTTP";
import UserService from '../service/loginService';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async getUserInfo(req: Request, res: Response) {
    const { email, password } = req.body;
    const { status, data } = await this.userService.getUserInfo(email, password);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}