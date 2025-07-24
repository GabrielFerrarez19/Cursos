// create-table.js
import { sql } from "./db.js";

await sql`
  CREATE TABLE IF NOT EXISTS videos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER
  )
`;

console.log("Tabela criada");
