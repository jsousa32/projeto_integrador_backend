import { Appointment } from "../models/Appointment";
import { Doctor } from "../models/Doctor";
import { Medicine } from "../models/Medicine";
import { Patient } from "../models/Patient";

export class DashboardService {
    async dashboardInfo() {
        const countDoctor = await Doctor.count();
        const countPatient = await Patient.count();
        const countAppointments = await Appointment.count();
        const allMedicines = await Medicine.findAll({
            limit: 5,
            attributes: ["name", "manufacturer", "quantity", "packaging"],
            order: [["quantity", "ASC"]],
        });

        return {
            numberDoctor: countDoctor,
            numberPatient: countPatient,
            numberAppointments: countAppointments,
            medicine: allMedicines,
        };
    }
}
