const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "Fa1219912199*",
    database: "postgres",
    port: 5432
});

module.exports = pool;