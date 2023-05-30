import { Request, Response, Router } from "express";
import userRouter from "./UserRouter";
import patientRouter from "./PatientRouter";
import doctorRouter from "./DoctorRouter";
import medicineRouter from "./MedicineRouter";
import appointmentRouter from "./AppointmentRouter";
import authRouter from "./AuthRouter";
import dashboardRouter from "./DashboardRouter";
import { checkToken } from "../middleware/AuthMiddleware";

const router = Router();

router.use("/status", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server is running" });
});

router.use("/auth", authRouter);
router.use("/user", checkToken, userRouter);
router.use("/patient", checkToken, patientRouter);
router.use("/doctor", checkToken, doctorRouter);
router.use("/medicine", checkToken, medicineRouter);
router.use("/appointment", checkToken, appointmentRouter);
router.use("/dashboard", checkToken, dashboardRouter);

export default router;
