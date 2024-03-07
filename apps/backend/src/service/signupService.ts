import * as brypt from 'bcryptjs';
import LoginModel from '../models/LoginModel';
import SignupModel from '../models/SignupModel';
import { ILoginModel } from '../Interfaces/Login/ILoginModel';
import { ISignupModel } from '../Interfaces/Signup/ISignupModel';
import { ServiceResponse } from '../types/ServiceResponse';

type LoginResponse = {
  message: string,
};

export default class SignupService {
  constructor(
    private signupModel: ISignupModel = new SignupModel(),
    private loginModel: ILoginModel = new LoginModel()
  ) { }

  public async createUser(username: string, password: string): Promise<ServiceResponse<LoginResponse>> {

    const hashedPassword = await brypt.hash(password, 10);

    const userExists = await this.loginModel.findByUsername(username);

    if (userExists) return { status: 'UNAUTHORIZED', data: { message: 'User already exists' } };

    await this.signupModel.createUser(username, hashedPassword);

    return { status: 'SUCCESSFUL', data: {message: 'User created'} };
  }
}
