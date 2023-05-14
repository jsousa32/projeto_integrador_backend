import { Router } from "express";
import { patientAppointment, patientId } from "../middleware/PatientMiddleware";
import { patientSchema } from "../validators/PatientValidator";
import { patientController } from "../controller";

const patientRouter = Router();

patientRouter.get("/", patientController.findAll);
patientRouter.get("/:id", patientId, patientController.findOne);
patientRouter.get("/susNumber/:susNumber", patientController.findSusNumber);
patientRouter.post("/", patientSchema, patientController.create);
patientRouter.post("/:id", patientController.restore);
patientRouter.put("/:id", patientId, patientController.update);
patientRouter.delete("/:id", patientId, patientAppointment, patientController.delete);

export default patientRouter;
