import { AppointmentService } from "./AppointmentService";
import { AuthService } from "./AuthService";
import { DashboardService } from "./DashboardService";
import { DoctorService } from "./DoctorService";
import { MedicineService } from "./MedicineService";
import { PatientService } from "./PatientService";
import { UserService } from "./UserService";

const authService = new AuthService();
const userService = new UserService();
const patientService = new PatientService();
const doctorService = new DoctorService();
const medicineService = new MedicineService();
const appointmentService = new AppointmentService();
const dashboardService = new DashboardService();

export {
    authService,
    userService,
    patientService,
    doctorService,
    medicineService,
    appointmentService,
    dashboardService,
};
