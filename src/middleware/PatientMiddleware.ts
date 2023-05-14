import { NextFunction, Request, Response } from "express";
import { appointmentService, patientService } from "../service";

export async function patientId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const onePatient = await patientService.findOne(id);

    if (!onePatient) return res.status(400).json({ message: "Paciente não encontrado." });

    next();
}

export async function patientAppointment(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const checkAppointment = await appointmentService.findByPatientId(id);

    if (checkAppointment.length !== 0)
        return res.status(400).json({ message: "Paciente possui consultas e não pode ser excluído." });

    next();
}
