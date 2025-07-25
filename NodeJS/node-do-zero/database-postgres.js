import { randomUUID } from "crypto";
import { sql } from "./db.js";

export class databasePostgres {
  //Set, Map

  async list(search = "") {
    let videos;

    if (search) {
      videos = await sql`
      SELECT * FROM videos WHERE title ILIKE ${`%${search}%`}
    `;
    } else {
      videos = await sql`SELECT * FROM videos`;
    }

    return videos;
  }

  async create(video) {
    const videosId = randomUUID();

    const { title, description, duration } = video;

    await sql`
  INSERT INTO videos (id, title, description, duration)
  VALUES (${videosId}, ${title}, ${description}, ${duration})
`;
  }

  async update(id, video) {
    const { title, description, duration } = video;

    await sql` update videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`;
  }

  async delete(id) {
    await sql`DELETE FROM videos WHERE id = ${id}`;
  }
}
