import { Router } from "express";
import { medicineId } from "../middleware/MedicineMiddleware";
import { medicineSchema } from "../validators/MedicineValidator";
import { medicineController } from "../controller";

const medicineRouter = Router();

medicineRouter.get("/", medicineController.findAll);
medicineRouter.get("/:id", medicineId, medicineController.findOne);
medicineRouter.post("/", medicineSchema, medicineController.create);
medicineRouter.post("/:id", medicineController.restore);
medicineRouter.put("/:id", medicineId, medicineController.update);
medicineRouter.delete("/:id", medicineId, medicineController.delete);

export default medicineRouter;
