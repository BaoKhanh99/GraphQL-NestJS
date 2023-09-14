export default () => ({
  app: {
    port: process.env.APP_PORT || 3000,
    env: process.env.APP_ENV || 'dev',
    tz: process.env.TZ,
  },
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
});
