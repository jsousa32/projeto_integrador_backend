import { NextFunction, Request, Response } from "express";
import { PatientService } from "../service/PatientService";

const patientService = new PatientService();

export async function patientId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const onePatient = await patientService.findOne(id);

    if (!onePatient) return res.status(400).json({ message: "Paciente não encontrado." });

    next();
}

export async function patientFields(req: Request, res: Response, next: NextFunction) {
    const { susNumber, email } = req.body;

    const patientSusNumber = await patientService.findSusNumber(susNumber);

    if (patientSusNumber) return res.status(400).json({ message: "Número do SUS já está cadastrado." });

    const patientEmail = await patientService.findByEmail(email);

    if (patientEmail) return res.status(400).json({ message: "E-mail já está cadastrado." });

    next();
}
