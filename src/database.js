var mysql = require("mysql2");

export const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "examenmoviles_dos",
  port: 3306

});