/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CronJob } from "cron";
import { patientService } from "../service";

export class DailyCron {
    async checkAbsentPatient() {
        new CronJob("25 * * * * *", async () => {
            console.log("Cron is running");
            const patient = await patientService.findAll();
            const date = new Date();

            for (const p of patient!) {
                if (p.absentAt === null) return;

                const patientAbsentDate = new Date(p.absentAt);

                if (patientAbsentDate < date) {
                    p.absentAt = null;
                    await patientService.update(p.dataValues, p.id.toString());
                }
            }
        }).start();
    }
}
