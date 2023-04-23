import { Request, Response } from "express";
import { DoctorService } from "../service/DoctorService";

export class DoctorController {
    private doctorService: DoctorService;

    constructor() {
        this.doctorService = new DoctorService();
    }

    findAll = async (req: Request, res: Response) => {
        try {
            const allDoctors = await this.doctorService.findAll();

            if (allDoctors?.length === 0) return res.status(400).send("No doctors");

            return res.status(200).json(allDoctors);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    findOne = async (req: Request, res: Response) => {
        try {
            const { crm } = req.params;

            const oneDoctor = await this.doctorService.findOne(crm);

            return res.status(200).json(oneDoctor);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            const bodyDoctor = req.body;

            await this.doctorService.create(bodyDoctor);

            return res.status(201).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const { crm } = req.params;
            const bodyDoctor = req.body;

            await this.doctorService.update(bodyDoctor, crm);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const { crm } = req.params;

            await this.doctorService.delete(crm);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    restore = async (req: Request, res: Response) => {
        try {
            const { crm } = req.params;

            this.doctorService.restore(crm);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
