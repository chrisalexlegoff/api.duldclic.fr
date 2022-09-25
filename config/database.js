module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", process.env.DB_HOST),
      port: env.int("DATABASE_PORT", process.env.DB_PORT),
      database: env("DATABASE_NAME", process.env.DB_NAME),
      user: env("DATABASE_USERNAME", process.env.DB_USER),
      password: env("DATABASE_PASSWORD", process.env.DB_PASSWORD),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
