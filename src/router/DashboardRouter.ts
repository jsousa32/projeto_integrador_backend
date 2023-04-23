import { Router } from "express";
import { DashboardController } from "../controller/DashboardController";

const dashboardRouter = Router();
const dashboardController = new DashboardController();

dashboardRouter.get("/", dashboardController.dashboard);

export default dashboardRouter;
