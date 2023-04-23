import { NextFunction, Request, Response } from "express";
import { PatientService } from "../service/PatientService";
import { UserService } from "../service/UserService";

const userService = new UserService();
const patientService = new PatientService();

export async function basicAuth(req: Request, res: Response, next: NextFunction) {
    const token = req.header("Authorization")?.replace("Basic ", "");

    if (!token) return res.status(400).send("No authorization");

    const decoded = Buffer.from(token, "base64").toString("ascii");
    const [username, password] = decoded.split(":");

    req.params.username = username;
    req.params.password = password;

    next();
}

export async function verify(req: Request, res: Response, next: NextFunction) {
    const { username } = req.params;

    const checkUser = await userService.findByEmail(username);

    if (checkUser) {
        req.body = checkUser;

        next();
    }

    const checkPatient = await patientService.findOne(username, "loginScope");

    if (checkPatient) {
        req.body = checkPatient;

        next();
    }

    if (!checkUser && !checkPatient) return res.status(400).send("Sem autorização");
}
