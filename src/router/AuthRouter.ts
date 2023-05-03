import { Router } from "express";
import { basicAuth, verify } from "../middleware/AuthMiddleware";
import { authController } from "../controller";

const authRouter = Router();

authRouter.get("/", basicAuth, verify, authController.login);

export default authRouter;
