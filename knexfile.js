module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/weather_app"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + "?ssl=true"
  }
};
