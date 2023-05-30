import { Request, Response } from "express";
import { DashboardService } from "../service/DashboardService";
import moment from "moment";

export class DashboardController {
    constructor(private dashboardService: DashboardService) {}

    dashboard = async (request: Request, response: Response) => {
        try {
            const date = new Date();

            const newDate = moment(date).format("YYYY-MM-DD");

            const dashboardInfo = await this.dashboardService.dashboardInfo(newDate);

            return response.status(200).json(dashboardInfo);
        } catch (error) {
            return response.status(500).json(error);
        }
    };
}
