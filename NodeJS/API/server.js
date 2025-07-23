import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/users", async (request, response) => {
  await prisma.user.create({
    data: {
      email: request.body.email,
      name: request.body.name,
      age: request.body.age,
    },
  });

  response.status(201).json(request.body);
});

app.get("/users", async (resquest, response) => {
  const users = await prisma.user.findMany();

  response.status(200).json({ users });
});

app.listen(3000);
