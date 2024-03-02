// import { Options } from "sequelize";
import 'dotenv/config';

// const {
//   POSTGRES_USER,
//   POSTGRES_PASSWORD,
//   POSTGRES_HOST,
//   POSTGRES_DATABASE,
// } = process.env;

const config = {
  connectionString: process.env.POSTGRES_URL ,
}

export = config
