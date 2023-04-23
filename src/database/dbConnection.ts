import { Sequelize } from "sequelize";

export const db = new Sequelize({
    database: "posto_saude1",
    username: "root",
    host: "localhost",
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
