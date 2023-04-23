import { DataTypes, Model } from "sequelize";
import { IPatient } from "../interface/IPatient";
import { db } from "../database/dbConnection";
import bcrypt from "bcrypt";

export class Patient extends Model implements IPatient {
    declare id: number;
    declare susNumber: bigint;
    declare name: string;
    declare email: string;
    declare password: string;
    declare telephone: string;
    declare isAdmin: boolean;
}

Patient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        susNumber: {
            type: DataTypes.BIGINT,
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        tableName: "patient",
        sequelize: db,
        paranoid: true,
        defaultScope: {
            attributes: {
                exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
            },
        },
        scopes: {
            loginScope: {
                attributes: {
                    exclude: ["createdAt", "updatedAt", "deletedAt"],
                },
            },
        },
    }
);

Patient.beforeCreate((patient) => {
    return bcrypt.hash(patient.password, 10).then((hash) => {
        patient.password = hash;
    });
});

Patient.sync();
