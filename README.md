# todo-list
A web-based to-do list, featuring authentication, authorization, logging, and persistence.

## **Technologies**

- Node.js
- Express
- PostgreSQL
- Redis
- JWT
- bcrypt
- Docker Compose

## Database Setup

The `docker-compose.yml` file includes two containers:
- **PostgreSQL**
- **Redis**

To start the database services:

1. Copy the contents of `.env.example` into a new file named `.env`.
2. Update the environment variables with your own configuration and secrets.
3. Make sure Docker is running.
4. Start the containers:

```bash
docker compose up -d
```

5. Verify that both containers are running:

```bash
docker compose ps
```