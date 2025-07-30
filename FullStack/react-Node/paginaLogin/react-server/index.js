const express = require("express");
const app = express();
const cors = require("cors");

const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "gabri1234",
  database: "protrack",
});

app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.status(500).send({ error: "Erro no servidor" });
      } else if (result.length > 0) {
        res.send({ message: "Login bem-sucedido" });
      } else {
        res.status(401).send({ error: "Credenciais inválidas" });
      }
    }
  );
});

app.listen(8080, () => {
  console.log("Rodando na porta 8080");
});
