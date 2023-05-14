import { NextFunction, Request, Response } from "express";
import { appointmentService, doctorService } from "../service";

export async function doctorId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const oneDoctor = await doctorService.findOne(id);

    if (!oneDoctor) return res.status(400).json({ message: "Médico não encontrado." });

    next();
}

export async function doctorAppointment(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const checkAppointment = await appointmentService.findByDoctorId(id);

    if (checkAppointment.length !== 0)
        return res.status(400).json({ message: "O médico não pode ser excluído pois possui consultas" });

    next();
}
