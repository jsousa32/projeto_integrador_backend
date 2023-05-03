import { NextFunction, Request, Response } from "express";
import { DoctorService } from "../service/DoctorService";

const doctorService = new DoctorService();

export async function doctorId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const oneDoctor = await doctorService.findOne(id);

    if (!oneDoctor) return res.status(400).json({ message: "Médico não encontrado." });

    next();
}
