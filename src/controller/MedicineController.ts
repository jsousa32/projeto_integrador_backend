import { Request, Response } from "express";
import { MedicineService } from "../service/MedicineService";

export class MedicineController {
    private medicineService: MedicineService;

    constructor() {
        this.medicineService = new MedicineService();
    }

    findAll = async (req: Request, res: Response) => {
        try {
            const allMedicine = await this.medicineService.findAll();

            if (allMedicine?.length === 0) return res.status(400).send("No medicines");

            return res.status(200).json(allMedicine);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    findOne = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const oneMedicine = await this.medicineService.findOne(id);

            return res.status(200).json(oneMedicine);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            const bodyMedicine = req.body;

            await this.medicineService.create(bodyMedicine);

            return res.status(201).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const bodyMedicine = req.body;

            await this.medicineService.update(bodyMedicine, id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            await this.medicineService.delete(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    restore = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            await this.medicineService.restore(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
