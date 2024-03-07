import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import LoginModel from '../models/LoginModel';
import { ILoginModel } from '../Interfaces/Login/ILoginModel';
import { ServiceResponse } from '../types/ServiceResponse';

type LoginResponse = {
  token: string,
};

export default class UserService {
  constructor(
    private loginModel: ILoginModel = new LoginModel(),
  ) { }

  public async getUserInfo(username: string, password: string): Promise<ServiceResponse<LoginResponse>> {
    const user = await this.loginModel.findByUsername(username);

    if (!user) return { status: 'UNAUTHORIZED', data: { message: 'Invalid username or password' } };

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid username or password' } };
    }

    const token = jwt.sign({
      id: user.id, username: user.username,
    }, process.env.JWT_SECRET as string ?? 'jwt_secret');

    return { status: 'SUCCESSFUL', data: { token } };
  }
}
