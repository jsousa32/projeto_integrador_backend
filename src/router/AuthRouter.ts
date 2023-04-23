import { Router } from "express";
import { AuthController } from "../controller/AuthController";
import { basicAuth, verify } from "../middleware/AuthMiddleware";

const authController = new AuthController();
const authRouter = Router();

authRouter.get("/", basicAuth, verify, authController.login);

export default authRouter;
