import { Router } from "express";
import { basicAuth, verify, verifyForgot } from "../middleware/AuthMiddleware";
import { authController } from "../controller";

const authRouter = Router();

authRouter.get("/", basicAuth, verify, authController.login);
authRouter.post("/forgot", verifyForgot, authController.forgotPassword);
authRouter.get("/reset", basicAuth, verify, authController.resetPassword);

export default authRouter;
