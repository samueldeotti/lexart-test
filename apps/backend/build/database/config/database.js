require('dotenv/config');

const { BASE_USER, BASE_PASSWORD, BASE_DATABASE, BASE_HOST, POSTGRES_URL } = process.env;
const config = {
    username: BASE_USER,
    password: BASE_PASSWORD,
    database: BASE_DATABASE,
    host: BASE_HOST,
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
};
module.exports = config;
