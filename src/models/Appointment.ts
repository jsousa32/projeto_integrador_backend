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
    }
);

Doctor.belongsToMany(Patient, {
    through: Appointment,
});

Patient.belongsToMany(Doctor, {
    through: Appointment,
});

Patient.hasMany(Appointment);
Appointment.belongsTo(Patient);

Doctor.hasMany(Appointment);
Appointment.belongsTo(Doctor);

Appointment.sync();
