module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Fa12199*",
  DB: "LobiDB",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};