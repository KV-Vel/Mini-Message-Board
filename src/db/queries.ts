import { pool } from "./pool.ts";
import { Message } from "../types/message.ts";
import { QueryConfig } from "pg";

export async function getMessages() {
    const res = await pool.query(`SELECT * FROM messages`);
    return res.rows;
}

export async function insertMessage(postPayload: Message) {
    const { text, user, added, color } = postPayload;

    const query: QueryConfig = {
        text: "INSERT INTO messages(username, text, added, color) VALUES($1, $2, $3, $4)",
        values: [user, text, added, color],
    };
    await pool.query(query);
}
