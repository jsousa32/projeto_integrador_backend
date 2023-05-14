import { Op } from "sequelize";
import { Appointment } from "../models/Appointment";
import { Doctor } from "../models/Doctor";
import { Medicine } from "../models/Medicine";
export class DashboardService {
    async dashboardInfo(date: string) {
        const countAppointmentsAtDay = await Appointment.count({
            include: [{ model: Doctor, attributes: ["speciality"] }],
            where: { date: { [Op.like]: date } },
        });
        const countAppointments = await Appointment.count({
            include: [{ model: Doctor, attributes: ["speciality"] }],
            where: { date: { [Op.like]: date } },
            group: ["Doctor.speciality"],
        });
        const allMedicines = await Medicine.findAll({
            limit: 5,
            attributes: ["name", "manufacturer", "quantity", "packaging"],
            order: [["quantity", "ASC"]],
        });

        return {
            numberAppointmentsAtDay: countAppointmentsAtDay,
            numberAppointments: countAppointments,
            medicine: allMedicines,
        };
    }
}
