import { Pool } from "pg";
import { dbConfig } from "./config.ts";

export const pool = new Pool(dbConfig);
