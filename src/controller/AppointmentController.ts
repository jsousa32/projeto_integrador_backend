import { Request, Response } from "express";
import { AppointmentService } from "../service/AppointmentService";

export class AppointmentController {
    constructor(private appointmentService: AppointmentService) {}

    findAll = async (req: Request, res: Response) => {
        try {
            const allAppointments = await this.appointmentService.findAll();

            if (allAppointments?.length === 0) return res.status(400).send("No appointments");

            return res.status(200).json(allAppointments);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    findOne = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const oneAppointment = await this.appointmentService.findOne(id);

            if (!oneAppointment) return res.status(400).send("No appointment found");

            return res.status(200).json(oneAppointment);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    findAllByDate = async (req: Request, res: Response) => {
        try {
            const { date, id } = req.params;

            const allAppointmentsOnDate = await this.appointmentService.findByDate(date, id);

            return res.status(200).json(allAppointmentsOnDate);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    findAllByPatientId = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const allAppointmentsOnDate = await this.appointmentService.findByPatientId(id);

            return res.status(200).json(allAppointmentsOnDate);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            const bodyAppointment = req.body;

            await this.appointmentService.create(bodyAppointment);

            return res.status(201).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const bodyAppointment = req.body;

            await this.appointmentService.update(bodyAppointment, id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const oneAppointment = await this.appointmentService.findOne(id);

            if (!oneAppointment) return res.status(400).send("No appointment found");

            this.appointmentService.delete(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    restore = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            this.appointmentService.restore(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
