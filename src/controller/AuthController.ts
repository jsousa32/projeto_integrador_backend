import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";
import bcrypt from "bcrypt";

export class AuthController {
    constructor(private authService: AuthService) {}

    login = async (req: Request, res: Response) => {
        try {
            const { password } = req.params;
            const user = req.body;

            const passwordIsValid = await bcrypt.compare(password, user.password);

            if (!passwordIsValid) return res.status(400).send("Password invalid");

            const token = await this.authService.generateToken(user.id);

            return res.status(200).json({
                id: user.id,
                name: user.name,
                isAdmin: user.isAdmin,
                token: token,
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
