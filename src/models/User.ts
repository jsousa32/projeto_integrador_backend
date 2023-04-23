import { CreationOptional, DataTypes, Model } from "sequelize";
import { IUser } from "../interface/IUser";
import { db } from "../database/dbConnection";
import bcrypt from "bcrypt";

export class User extends Model implements IUser {
    declare id?: CreationOptional<number>;
    declare name: string;
    declare email: string;
    declare password: string;
    declare isAdmin: boolean;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        tableName: "user",
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

User.beforeCreate((user) => {
    return bcrypt.hash(user.password, 10).then((hash) => {
        user.password = hash;
    });
});

User.sync();
