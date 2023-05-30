/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextFunction, Request, Response } from "express";
import { PatientService } from "../service/PatientService";
import { UserService } from "../service/UserService";
import jwt from "jsonwebtoken";

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

export async function checkToken(req: Request, res: Response, next: NextFunction) {
    const token = req.header("Authorization")?.replace("Basic ", "");

    if (!token) return res.status(400).json({ message: "Not authorized" });

    const secret = process.env.SECRET_KEY;

    const check = jwt.verify(token!, secret!, { complete: true });

    if (!check) return res.status(400).json({ message: "Not authorized" });

    next();
}

export async function verify(req: Request, res: Response, next: NextFunction) {
    const { username } = req.params;

    const checkUser = await userService.findByEmail(username);

    if (checkUser) {
        req.body = checkUser;

        return next();
    }

    const checkPatient = await patientService.findSusNumber(username, "loginScope");

    if (checkPatient) {
        req.body = checkPatient;

        return next();
    }

    if (!checkUser && !checkPatient) return res.status(400).send("Sem autorização");
}

export async function verifyForgot(req: Request, res: Response, next: NextFunction) {
    const { username } = req.body;

    const checkUser = await userService.findByEmail(username);

    if (checkUser) {
        req.body = checkUser;

        next();
    }

    const checkPatient = await patientService.findSusNumber(username);

    if (checkPatient) {
        req.body = checkPatient;

        next();
    }

    if (!checkUser && !checkPatient) return res.status(400).send("Nenhum registro encontrado");
}
