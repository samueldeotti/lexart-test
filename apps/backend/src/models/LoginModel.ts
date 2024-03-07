import { User } from '../Interfaces/Login/UserType';
import { ILoginModel } from '../Interfaces/Login/ILoginModel';
import SequelizeUser from '../database/models/LoginModel';

export default class UserModel implements ILoginModel {
  private model = SequelizeUser;

  async findByUsername(username:string): Promise<User | null> {
    const user = await this.model.findOne({ where: { username } });
    if (!user) return null;

    return user.dataValues;
  }
}
