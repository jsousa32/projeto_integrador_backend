import { NextFunction, Request, Response } from "express";
import { DoctorService } from "../service/DoctorService";

const doctorService = new DoctorService();

export async function doctorId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const oneDoctor = await doctorService.findOne(id);

    if (!oneDoctor) return res.status(400).json({ message: "Médico não encontrado." });

    next();
}

export async function doctorFields(req: Request, res: Response, next: NextFunction) {
    const { crm, email } = req.body;

    const doctorCrm = await doctorService.findCrm(crm);

    if (!doctorCrm) return res.status(400).json({ message: "Crm já cadastrado" });

    const doctorEmail = await doctorService.findByEmail(email);

    if (!doctorEmail) return res.status(400).json({ message: "Email já cadastrado" });

    next();
}
