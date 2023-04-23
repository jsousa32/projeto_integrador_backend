import { Request, Response, Router } from "express";
import userRouter from "./UserRouter";
import patientRouter from "./PatientRouter";
import doctorRouter from "./DoctorRouter";
import medicineRouter from "./MedicineRouter";
import appointmentRouter from "./AppointmentRouter";
import authRouter from "./AuthRouter";
import dashboardRouter from "./DashboardRouter";

const router = Router();

router.use("/status", (req: Request, res: Response) => {
    res.status(200).send("Está funcionando");
});

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/patient", patientRouter);
router.use("/doctor", doctorRouter);
router.use("/medicine", medicineRouter);
router.use("/appointment", appointmentRouter);
router.use("/dashboard", dashboardRouter);

export default router;
