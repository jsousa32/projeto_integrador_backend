import { DataTypes, Model } from "sequelize";
import { IAppointment } from "../interface/IAppointment";
import { Doctor } from "./Doctor";
import { Patient } from "./Patient";
import { db } from "../database/dbConnection";

export class Appointment extends Model implements IAppointment {
    declare id?: number;
    declare date: Date;
    declare time: Date;
}

Appointment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        DoctorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Doctor,
                key: "id",
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
        PatientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Patient,
                key: "id",
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
    },
    {
        tableName: "appointment",
        sequelize: db,
        paranoid: true,
        defaultScope: {
            attributes: {
                exclude: ["PatientId", "DoctorId"],
            },
        },
        indexes: [
            {
                unique: false,
                fields: ["PatientId", "DoctorId"],
            },
        ],
    }
);

Appointment.belongsTo(Patient, {
    foreignKey: "PatientId",
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    hooks: true,
});

Appointment.belongsTo(Doctor, {
    foreignKey: "DoctorId",
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
    hooks: true,
});

Appointment.sync();
