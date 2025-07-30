import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localHost",
  user: "root",
  password: "gabri1234",
  database: "crud",
});
