require("dotenv").config();

const config = {
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASS: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_PORT: process.env.POSTGRES_PORT,

    REDIS_PASS: process.env.REDIS_PASSWORD,
    REDIS_PORT: process.env.REDIS_PORT,
}

module.exports = config;