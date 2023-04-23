import { Request, Response } from "express";
import { UserService } from "../service/UserService";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    findAll = async (req: Request, res: Response) => {
        try {
            const allUsers = await this.userService.findAll();

            if (allUsers?.length === 0) return res.status(400).json({ message: "Nenhum usuário encontrado." });

            return res.status(200).json(allUsers);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    findOne = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const oneUser = await this.userService.findOne(id);

            return res.status(200).json(oneUser);
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            const bodyUser = req.body;

            await this.userService.create(bodyUser);

            return res.status(201).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const bodyUser = req.body;
            const { id } = req.params;

            await this.userService.update(bodyUser, id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            await this.userService.delete(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    restore = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            await this.userService.restore(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
