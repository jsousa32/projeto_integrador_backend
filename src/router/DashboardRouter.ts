import { Router } from "express";
import { dashboardController } from "../controller";
import { checkToken } from "../middleware/AuthMiddleware";

const dashboardRouter = Router();

dashboardRouter.get("/", checkToken, dashboardController.dashboard);

export default dashboardRouter;
