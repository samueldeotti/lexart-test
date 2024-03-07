import { User } from '../Login/UserType';

export interface ISignupModel {
  createUser(username: string, password: string): Promise<User>;
}
