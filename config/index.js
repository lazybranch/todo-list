require("dotenv").config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    
    DATABASE_URL: `postgresql://${this.POSTGRES_USER}:${this.POSTGRES_PASS}@localhost:${this.POSTGRES_PORT}/${this.POSTGRES_DB}`,

    REDIS_PASS: process.env.REDIS_PASSWORD,
    REDIS_PORT: process.env.REDIS_PORT,
}

module.exports = config;