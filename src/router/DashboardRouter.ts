import { Router } from "express";
import { dashboardController } from "../controller";

const dashboardRouter = Router();

dashboardRouter.get("/", dashboardController.dashboard);

export default dashboardRouter;
