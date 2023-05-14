import { Request, Response } from "express";
import { AuthService } from "../service/AuthService";
import bcrypt from "bcrypt";
import { patientService, userService } from "../service";

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

    forgotPassword = async (req: Request, res: Response) => {
        try {
            const user = req.body;

            await this.authService.forgot(user.name, user.email, user.susNumber ? user.susNumber : null);

            return res.status(200).json({
                message: "E-mail enviado com sucesso",
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    };

    resetPassword = async (req: Request, res: Response) => {
        try {
            const { password } = req.params;
            const user = req.body;

            if ("susNumber" in user) {
                await bcrypt.hash(password, 10).then((hash) => {
                    user.password = hash;
                });

                await patientService.updatePassword(user.password, user.id);

                return res.status(204).send();
            }
            if ("email" in user) {
                await bcrypt.hash(password, 10).then((hash) => {
                    user.password = hash;
                });

                await userService.updatePassword(user.password, user.id);

                return res.status(204).send();
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    };
}
