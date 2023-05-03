import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/UserService";

const userService = new UserService();

export async function userId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const oneUser = await userService.findOne(id);

    if (!oneUser) return res.status(400).json({ message: "Usuário não encontrado." });

    next();
}
