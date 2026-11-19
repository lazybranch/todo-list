const express = require("express");
const config = require("../config/index");
const { create_tables } = require("../scripts/create_db");



async function start_server() {
    const PORT = config.port;

    await create_tables();

    app.listen(PORT, () => {
        console.log(`🌎 server listening at http://localhost:${PORT}`);
    })
}

const app = express();

start_server();