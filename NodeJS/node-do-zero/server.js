/* import { write } from "node:fs";
import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.write("hello, world");

  return response.end();
});

server.listen(3333); */

import { fastify } from "fastify";
// import { databaseMemory } from "./database-memory.js";
import { databasePostgres } from "./database-postgres.js";

const server = fastify();

//GET, Buscar informações
//POST, Criar registros
//PUT Alterar informações
//DELETE, deletar informações

//const database = new databaseMemory();

const database = new databasePostgres();

server.post("/videos", async (request, reply) => {
  const { title, description, duration } = request.body;

  await database.create({
    title,
    description,
    duration,
  });

  console.log(database.list());
  console.log(request.body);

  return reply.status(201);
});

server.get("/videos", async (request) => {
  const search = request.query.search;

  const videos = await database.list(search);

  return videos;
});

server.put("/videos/:id", async (request, reply) => {
  const videpID = request.params.id;
  const { title, description, duration } = request.body;

  await database.update(videpID, {
    title,
    description,
    duration,
  });

  return reply.status(204).send;
});

server.delete("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);

  return reply.status(204).send;
});

server.listen({
  port: process.env.PROT ?? 3333,
});
