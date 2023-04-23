import { NextFunction, Request, Response } from "express";
import { MedicineService } from "../service/MedicineService";

const medicineService = new MedicineService();

export async function medicineId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const onePatient = await medicineService.findOne(id);

    if (!onePatient) return res.status(400).json({ message: "Medicamento não encontrado." });

    next();
}
