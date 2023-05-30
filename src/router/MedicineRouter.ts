import { Router } from "express";
import { medicineId } from "../middleware/MedicineMiddleware";
import { medicineSchema } from "../validators/MedicineValidator";
import { medicineController } from "../controller";
import { checkToken } from "../middleware/AuthMiddleware";

const medicineRouter = Router();

medicineRouter.get("/", checkToken, medicineController.findAll);
medicineRouter.get("/:id", checkToken, medicineId, medicineController.findOne);
medicineRouter.post("/", checkToken, medicineSchema, medicineController.create);
medicineRouter.post("/:id", medicineController.restore);
medicineRouter.put("/:id", checkToken, medicineId, medicineController.update);
medicineRouter.delete("/:id", checkToken, medicineId, medicineController.delete);

export default medicineRouter;
