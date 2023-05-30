import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

export const db = new Sequelize({
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql",
});

export const dbConnection = async function () {
    try {
        await db.authenticate();
        console.log("Database connection successfully");
    } catch (error) {
        console.log("Database connection failed " + error);
    }
};
