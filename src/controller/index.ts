import {
    appointmentService,
    authService,
    dashboardService,
    doctorService,
    medicineService,
    patientService,
    userService,
} from "../service";
import { AppointmentController } from "./AppointmentController";
import { AuthController } from "./AuthController";
import { DashboardController } from "./DashboardController";
import { DoctorController } from "./DoctorController";
import { MedicineController } from "./MedicineController";
import { PatientController } from "./PatientController";
import { UserController } from "./UserController";

const authController = new AuthController(authService);
const userController = new UserController(userService);
const patientController = new PatientController(patientService);
const doctorController = new DoctorController(doctorService);
const medicineController = new MedicineController(medicineService);
const appointmentController = new AppointmentController(appointmentService);
const dashboardController = new DashboardController(dashboardService);

export {
    authController,
    userController,
    patientController,
    doctorController,
    medicineController,
    appointmentController,
    dashboardController,
};
