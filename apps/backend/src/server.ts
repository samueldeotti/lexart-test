import app from './app';
import 'dotenv/config';
import * as config from '../src/database/config/database'


const PORT = 5432;

const {
  BASE_USER,
  BASE_PASSWORD,
  BASE_DATABASE,
  BASE_HOST,
} = process.env;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  console.log('BASE_USER:', BASE_USER)
  console.log('BASE_PASSWORD', BASE_PASSWORD)
  console.log('BASE_DATABASE', BASE_DATABASE)
  console.log('BASE_HOST', BASE_HOST)

  console.log(config)

});
