import { Router } from "express";
import { doctorAppointment, doctorId } from "../middleware/DoctorMiddleware";
import { doctorSchema } from "../validators/DoctorValidator";
import { doctorController } from "../controller";
import { checkToken } from "../middleware/AuthMiddleware";

const doctorRouter = Router();

doctorRouter.get("/", checkToken, doctorController.findAll);
doctorRouter.get("/:id", checkToken, doctorId, doctorController.findOne);
doctorRouter.post("/", checkToken, doctorSchema, doctorController.create);
doctorRouter.post("/:id", doctorController.restore);
doctorRouter.put("/:id", checkToken, doctorController.update);
doctorRouter.delete("/:id", checkToken, doctorId, doctorAppointment, doctorController.delete);

export default doctorRouter;
