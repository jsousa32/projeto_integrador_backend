import jwt from "jsonwebtoken";

export class AuthService {
    generateToken(args: string) {
        const secret = process.env.SECRET_KEY as string;

        const token = jwt.sign({ id: args }, secret, { expiresIn: 3600 });

        return token;
    }
}
