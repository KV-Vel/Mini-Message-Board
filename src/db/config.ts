import { ConnectionConfig } from "pg";

const localDbConfig: ConnectionConfig = {
    connectionString: process.env.LOCAL_DB_CONNECTION_STR,
};

const cloudDbConfig: ConnectionConfig = {
    connectionString: process.env.CLOUD_DB_CONNECTION_STR,
};

export const dbConfig = process.env.MODE === "production" ? cloudDbConfig : localDbConfig;
