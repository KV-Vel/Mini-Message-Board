import { Client } from "pg";
import { dbConfig } from "./config.ts";

const query = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR (32) NOT NULL,
        text TEXT NOT NULL, 
        added DATE NOT NULL,
        color VARCHAR (20) NOT NULL
    );

    INSERT INTO messages (username, text, added, color)
        VALUES ('Amando', 'Hi there!', CAST('2026-05-11' AS DATE), '255, 255, 255, 0.8'),
            ('Charles', 'Hello World!', CAST('2025-05-11' AS DATE), '255, 165, 0, 1'),
            ('test', 'waw', CAST('2025-05-11' AS DATE), '255, 215, 0, 1'),
            ('great job~!', 'keep it up', CAST('2025-05-13' AS DATE), '255, 36, 0, 1'),
            ('klaus', 'this is me', CAST('2026-05-14' AS DATE), '152, 255, 152, 1');
    `;

async function initDb() {
    console.log("starting db");
    const client = new Client(dbConfig);
    try {
        console.log("client created");
        await client.connect();
        console.log("connected");
        await client.query(query);
    } catch (error: unknown) {
        console.log(error instanceof Error ? error.message : error);
    } finally {
        await client.end();
    }
}

initDb();
