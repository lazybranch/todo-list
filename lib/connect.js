const { default: postgres } = require("postgres");
const config = require("../config");

const pg_connection = postgres(config.DATABASE);

module.exports = {
    pg_connection,
}