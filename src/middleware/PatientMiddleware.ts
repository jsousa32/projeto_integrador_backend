import { NextFunction, Request, Response } from "express";
import { PatientService } from "../service/PatientService";

const patientService = new PatientService();

export async function patientId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const onePatient = await patientService.findOne(id);

    if (!onePatient) return res.status(400).json({ message: "Paciente não encontrado." });

    next();
}
