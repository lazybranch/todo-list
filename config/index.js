require("dotenv").config();

const config = {
    dev: process.env.NODE_ENV !== "production",
    port: process.env.PORT || 3000,

    DATABASE: {
        host: "localhost",
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
    },

    REDIS_PASS: process.env.REDIS_PASSWORD,
    REDIS_PORT: Number(process.env.REDIS_PORT)
};

module.exports = config;