import { Router } from "express";
import { patientAppointment, patientId } from "../middleware/PatientMiddleware";
import { patientSchema } from "../validators/PatientValidator";
import { patientController } from "../controller";
import { checkToken } from "../middleware/AuthMiddleware";

const patientRouter = Router();

patientRouter.get("/", checkToken, patientController.findAll);
patientRouter.get("/:id", checkToken, patientId, patientController.findOne);
patientRouter.get("/susNumber/:susNumber", checkToken, patientController.findSusNumber);
patientRouter.post("/", patientSchema, patientController.create);
patientRouter.post("/:id", patientController.restore);
patientRouter.put("/:id", checkToken, patientId, patientController.update);
patientRouter.delete("/:id", checkToken, patientId, patientAppointment, patientController.delete);

export default patientRouter;
