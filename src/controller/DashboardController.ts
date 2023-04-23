import { Request, Response } from "express";
import { DashboardService } from "../service/DashboardService";

export class DashboardController {
    private dashboardService: DashboardService;

    constructor() {
        this.dashboardService = new DashboardService();
    }

    dashboard = async (request: Request, response: Response) => {
        try {
            const dashboardInfo = await this.dashboardService.dashboardInfo();

            return response.status(200).json(dashboardInfo);
        } catch (error) {
            return response.status(500).json(error);
        }
    };
}
