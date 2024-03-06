import { Request, Response } from 'express';
import mapStatusHTTP from "../utils/mapStatusHTTP";
import UserService from '../service/loginService';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async getUserInfo(req: Request, res: Response) {
    const { username, password } = req.body;
    const { status, data } = await this.userService.getUserInfo(username, password);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
