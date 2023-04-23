import { Request, Response } from "express";
import { PatientService } from "../service/PatientService";

export class PatientController {
    private patientService: PatientService;

    constructor() {
        this.patientService = new PatientService();
    }

    findAll = async (req: Request, res: Response) => {
        try {
            const allPatient = await this.patientService.findAll();

            if (allPatient?.length === 0) return res.status(400).send("No patients");

            return res.status(200).json(allPatient);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    findOne = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const onePatient = await this.patientService.findOne(id);

            return res.status(200).json(onePatient);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            const bodyPatient = req.body;

            await this.patientService.create(bodyPatient);

            return res.status(201).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const bodyPatient = req.body;

            this.patientService.update(bodyPatient, id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            this.patientService.delete(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    restore = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            await this.patientService.restore(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
