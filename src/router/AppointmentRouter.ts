import { Router } from "express";
import { AppointmentController } from "../controller/AppointmentController";
import { appointmentFields, appointmentId } from "../middleware/AppointmentMiddleware";
import { doctorSchema } from "../validators/DoctorValidator";

const appointmentController = new AppointmentController();
const appointmentRouter = Router();

appointmentRouter.get("/", appointmentController.findAll);
appointmentRouter.get("/:id", appointmentId, appointmentController.findOne);
appointmentRouter.get("/date/:date/crm/:crm", appointmentController.findAllByDateAndCrm);
appointmentRouter.get("/susNumber/:susNumber", appointmentController.findAllBySusNumber);
appointmentRouter.post("/", doctorSchema, appointmentFields, appointmentController.create);
appointmentRouter.post("/:id", appointmentController.restore);
appointmentRouter.put("/:id", appointmentId, appointmentFields, appointmentController.update);
appointmentRouter.delete("/:id", appointmentId, appointmentController.delete);

export default appointmentRouter;
