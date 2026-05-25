import { ConnectionConfig } from "pg";

const localDbConfig: ConnectionConfig = {
    connectionString: process.env.LOCAL_DB_CONNECTION_STR,
};

const cloudDbConfig: ConnectionConfig = {
    connectionString: process.env.DATABASE_URL,
};

export const dbConfig = process.env.MODE === "production" ? cloudDbConfig : localDbConfig;
