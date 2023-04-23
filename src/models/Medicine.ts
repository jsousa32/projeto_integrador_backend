import { DataTypes, Model } from "sequelize";
import { IMedicine } from "../interface/IMedicine";
import { db } from "../database/dbConnection";

export class Medicine extends Model implements IMedicine {
    declare id?: number;
    declare name: string;
    declare manufacturer: string;
    declare quantity: number;
    declare packaging: string;
    declare recommendation: string;
}

Medicine.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        packaging: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recommendation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "medicine",
        sequelize: db,
        paranoid: true,
    }
);

Medicine.sync();
