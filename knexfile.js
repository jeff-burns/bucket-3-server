module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/weatherApp'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};