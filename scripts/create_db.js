const { pg_connection } = require("../lib/connect");

async function create_tables() {
    await pg_connection`
    CREATE TABLE IF NOT EXISTS "User" (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );`

    await pg_connection`
    CREATE TABLE IF NOT EXISTS Task (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        task_content TEXT,
        finished BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        finished_at TIMESTAMPTZ
    );`
}

module.exports = {
    create_tables,
}