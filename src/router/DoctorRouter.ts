import { Router } from "express";
import { doctorAppointment, doctorId } from "../middleware/DoctorMiddleware";
import { doctorSchema } from "../validators/DoctorValidator";
import { doctorController } from "../controller";

const doctorRouter = Router();

doctorRouter.get("/", doctorController.findAll);
doctorRouter.get("/:id", doctorId, doctorController.findOne);
doctorRouter.post("/", doctorSchema, doctorController.create);
doctorRouter.post("/:id", doctorController.restore);
doctorRouter.put("/:id", doctorController.update);
doctorRouter.delete("/:id", doctorId, doctorAppointment, doctorController.delete);

export default doctorRouter;
