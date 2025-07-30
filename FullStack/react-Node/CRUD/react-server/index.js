import express from "express";
import cors from "cors";
import usersRouter from "./router/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", usersRouter);

app.listen(8080);
