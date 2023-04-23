import { Router } from "express";
import { DoctorController } from "../controller/DoctorController";
import { doctorFields, doctorId } from "../middleware/DoctorMiddleware";
import { doctorSchema } from "../validators/DoctorValidator";

const doctorController = new DoctorController();
const doctorRouter = Router();

doctorRouter.get("/", doctorController.findAll);
doctorRouter.get("/:id", doctorId, doctorController.findOne);
doctorRouter.post("/", doctorSchema, doctorFields, doctorController.create);
doctorRouter.post("/:id", doctorController.restore);
doctorRouter.put("/:id", doctorId, doctorFields, doctorController.update);
doctorRouter.delete("/:id", doctorId, doctorController.delete);

export default doctorRouter;
