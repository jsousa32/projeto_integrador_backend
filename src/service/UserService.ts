import { IUser } from "../interface/IUser";
import { User } from "../models/User";
import { GlobalService } from "./GlobalService";

export class UserService implements GlobalService<User> {
    findAll(): Promise<User[] | null> {
        const allUser = User.findAll();

        return allUser;
    }

    findOne(id: string, scope?: string): Promise<User | null> {
        const oneUser = User.scope(scope).findOne({ where: { id: id } });

        return oneUser;
    }

    findByEmail(email: string, scope?: string): Promise<User | null> {
        const oneUser = User.scope(scope).findOne({ where: { email: email } });

        return oneUser;
    }

    create(body: IUser) {
        return User.create(body);
    }

    update(body: IUser, id: string) {
        return User.update(body, { where: { id: id } });
    }

    updatePassword(newPassword: string, id: string) {
        return User.update({ password: newPassword }, { where: { id: id } });
    }

    delete(id: string) {
        return User.destroy({ where: { id: id } });
    }

    restore(id: string) {
        return User.restore({ where: { id: id } });
    }
}
