import { DataTypes, Model } from "sequelize";
import { IDoctor } from "../interface/IDoctor";
import { db } from "../database/dbConnection";
import { Appointment } from "./Appointment";

export class Doctor extends Model implements IDoctor {
    declare id: number;
    declare crm: number;
    declare name: string;
    declare email: string;
    declare speciality: string;
    declare telephone: string;
}

Doctor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        crm: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        speciality: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "doctor",
        sequelize: db,
        paranoid: true,
        defaultScope: {
            attributes: {
                exclude: ["createdAt", "updatedAt", "deletedAt"],
            },
        },
        hooks: {
            async beforeBulkDestroy(options) {
                const { where } = options;

                if (typeof where === "object" && where !== null && "id" in where) {
                    const doctorId = where.id;

                    await Appointment.destroy({
                        where: {
                            DoctorId: doctorId,
                        },
                    });
                }
            },
        },
    }
);

Doctor.sync();
