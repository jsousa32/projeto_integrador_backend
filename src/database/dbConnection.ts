import { Dialect, Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

export const db = new Sequelize({
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    dialect: process.env.DB_DIALECT as Dialect,
});

export const dbConnection = async function () {
    try {
        await db.authenticate();
        console.log("Database connection successfully");
    } catch (error) {
        console.log("Database connection failed " + error);
    }
};
