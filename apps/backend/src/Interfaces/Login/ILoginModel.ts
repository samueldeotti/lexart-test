import { User } from './UserType';

export type UserParams = {
  username: string;
  password: string;
};

export interface ILoginModel {
  findByUsername(username: string): Promise<User | null>;
}
