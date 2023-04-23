import { Router } from "express";
import { MedicineController } from "../controller/MedicineController";
import { medicineId } from "../middleware/MedicineMiddleware";
import { medicineSchema } from "../validators/MedicineValidator";

const medicineController = new MedicineController();
const medicineRouter = Router();

medicineRouter.get("/", medicineController.findAll);
medicineRouter.get("/:id", medicineId, medicineController.findOne);
medicineRouter.post("/", medicineSchema, medicineController.create);
medicineRouter.post("/:id", medicineController.restore);
medicineRouter.put("/:id", medicineId, medicineController.update);
medicineRouter.delete("/:id", medicineId, medicineController.delete);

export default medicineRouter;
