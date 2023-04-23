import { Router } from "express";
import { PatientController } from "../controller/PatientController";
import { patientFields, patientId } from "../middleware/PatientMiddleware";
import { patientSchema } from "../validators/PatientValidator";

const patientController = new PatientController();
const patientRouter = Router();

patientRouter.get("/", patientController.findAll);
patientRouter.get("/:id", patientId, patientController.findOne);
patientRouter.post("/", patientSchema, patientFields, patientController.create);
patientRouter.post("/:id", patientController.restore);
patientRouter.put("/:id", patientId, patientFields, patientController.update);
patientRouter.delete("/:id", patientId, patientController.delete);

export default patientRouter;
