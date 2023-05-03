import { Router } from "express";
import { appointmentFields, appointmentId } from "../middleware/AppointmentMiddleware";
import { appointmentController } from "../controller";
import { appointmentSchema } from "../validators/AppointmentValidator";

const appointmentRouter = Router();

appointmentRouter.get("/", appointmentController.findAll);
appointmentRouter.get("/:id", appointmentId, appointmentController.findOne);
appointmentRouter.get("/date/:date/id/:id", appointmentController.findAllByDate);
appointmentRouter.get("/id/:id", appointmentController.findAllByPatientId);
appointmentRouter.post("/", appointmentSchema, appointmentFields, appointmentController.create);
appointmentRouter.post("/:id", appointmentController.restore);
appointmentRouter.put("/:id", appointmentId, appointmentFields, appointmentController.update);
appointmentRouter.delete("/:id", appointmentId, appointmentController.delete);

export default appointmentRouter;
