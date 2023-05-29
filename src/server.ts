import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import router from "./router";
import { dbConnection } from "./database/dbConnection";
import { DailyCron } from "./utils/DailyCron";

const cron = new DailyCron();

dotenv.config();
const app = express();
dbConnection();
const port = process.env.PORT || 8080;
cron.checkAbsentPatient();

app.use(express.json());
app.use(
    cors({
        methods: "GET, PUT, POST, DELETE",
        origin: "*",
    })
);
app.use("/api", router);
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
