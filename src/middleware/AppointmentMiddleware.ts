import { NextFunction, Request, Response } from "express";
import { AppointmentService } from "../service/AppointmentService";
import { patientService } from "../service";
import moment from "moment";

const appointmentService = new AppointmentService();

export async function appointmentId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const oneAppointment = await appointmentService.findOne(id);

    if (!oneAppointment) return res.status(400).json({ message: "Consulta não encontrada." });

    next();
}

export async function appointmentFields(req: Request, res: Response, next: NextFunction) {
    const bodyAppointment = req.body;

    const date = new Date(bodyAppointment.date).toISOString();
    const nowDay = new Date().toISOString();

    if (date < nowDay) return res.status(400).json({ message: "Não é possível cadastrar consulta com datas passadas" });

    const checkAppointments = await appointmentService.findByDateAndTime(
        bodyAppointment.date,
        bodyAppointment.time,
        bodyAppointment.DoctorId
    );

    if (checkAppointments.length === 3) return res.status(400).send("Limite máximo de consulta alcançado.");

    const checkPatientAppointment = await appointmentService.findByDateAndPatientId(
        bodyAppointment.date,
        bodyAppointment.PatientId
    );

    if (checkPatientAppointment)
        return res.status(401).json({
            message: "Paciente já possui outra consulta marcada no dia selecionado.",
        });

    next();
}

export async function checkPatient(req: Request, res: Response, next: NextFunction) {
    const bodyAppointment = req.body;

    const patient = await patientService.findOne(bodyAppointment.PatientId);

    if (patient?.absentAt !== null) {
        const date = patient?.absentAt.toISOString();

        const newDate = moment(date).format("DD/MM/YYYY");

        return res.status(400).json({ message: `Você está bloqueado até: ${newDate}` });
    }

    next();
}
