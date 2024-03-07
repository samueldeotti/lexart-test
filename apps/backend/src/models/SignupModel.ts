import { User } from '../Interfaces/Login/UserType';
import { ISignupModel } from '../Interfaces/Signup/ISignupModel';
import SequelizeUser from '../database/models/LoginModel';

export default class SignupModel implements ISignupModel {
  private model = SequelizeUser;

  public async createUser(username: string, password: string): Promise<User> {
    const user = await this.model.create({ username, password });
    return user;
  }
}
