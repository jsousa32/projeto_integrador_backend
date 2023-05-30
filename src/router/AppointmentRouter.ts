import { Router } from "express";
import { appointmentFields, appointmentId, checkPatient } from "../middleware/AppointmentMiddleware";
import { appointmentController } from "../controller";
import { appointmentSchema } from "../validators/AppointmentValidator";
import { checkToken } from "../middleware/AuthMiddleware";

const appointmentRouter = Router();

appointmentRouter.get("/", checkToken, appointmentController.findAll);
appointmentRouter.get("/:id", checkToken, appointmentId, appointmentController.findOne);
appointmentRouter.get("/date/:date/id/:id", checkToken, appointmentController.findAllByDate);
appointmentRouter.get("/id/:id", checkToken, appointmentController.findAllByPatientId);
appointmentRouter.post(
    "/",
    checkToken,
    appointmentSchema,
    appointmentFields,
    checkPatient,
    appointmentController.create
);
appointmentRouter.post("/:id", appointmentController.restore);
appointmentRouter.put("/:id", checkToken, appointmentId, appointmentFields, appointmentController.update);
appointmentRouter.delete("/:id", checkToken, appointmentId, appointmentController.delete);

export default appointmentRouter;
