// import mysql from "mysql"

// export const db = mysql.createConnection({
//     host: "mysql-container",
//     user: "root",
//     password: "r00t",
//     database: "db_smt"
// });


//const express = require("express");
//const mysql = require("mysql");
import mysql from "mysql2"
//const app = express();

export const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "R00t",
  database: process.env.MYSQL_DATABASE || "db_smt",
});