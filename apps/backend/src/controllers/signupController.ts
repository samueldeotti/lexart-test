import { Request, Response } from 'express';
import mapStatusHTTP from "../utils/mapStatusHTTP";
import SignupService from '../service/signupService';

export default class SignupController {
  constructor(
    private signupService = new SignupService(),
  ) { }

  public async createUser(req: Request, res: Response) {
    const { username, password } = req.body;
    const { status, data } = await this.signupService.createUser(username, password);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
