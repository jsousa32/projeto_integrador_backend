import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { mailBody } from "./../utils/mail/body";

export class AuthService {
    async generateToken(args: string) {
        const secret = process.env.SECRET_KEY as string;

        const token = jwt.sign({ id: args }, secret, { expiresIn: 3600 });

        return token;
    }

    async forgot(name: string, email: string, susNumber: string) {
        const transport = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            requireTLS: true,
            auth: {
                user: "projeto.fepi.sus@gmail.com",
                pass: "jbcxhqgzaaljszyf",
            },
        });

        const encoded = await Buffer.from(susNumber ? susNumber.toString() : email, "ascii").toString("base64");

        await transport
            .sendMail({
                subject: "Recuperação de Senha",
                to: "jsousa.quimico@gmail.com",
                html: mailBody(name, encoded),
            })
            .catch((err: Error) => {
                console.log(err);
            });
    }
}
