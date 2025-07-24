import postgres from "postgres";
import "dotenv/config";

import http from "http";

export const sql = postgres(process.env.DATABASE_URL);
