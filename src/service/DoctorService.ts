import { IDoctor } from "../interface/IDoctor";
import { Doctor } from "../models/Doctor";
import { GlobalService } from "./GlobalService";

export class DoctorService implements GlobalService<Doctor> {
    findAll(): Promise<Doctor[] | null> {
        const allDoctors = Doctor.findAll();

        return allDoctors;
    }

    findOne(id: string, scope?: string): Promise<Doctor | null> {
        const oneDoctor = Doctor.scope(scope).findOne({ where: { id: id } });

        return oneDoctor;
    }

    findCrm(crm: number): Promise<Doctor | null> {
        const oneDoctor = Doctor.findOne({ where: { crm: crm } });

        return oneDoctor;
    }

    findByEmail(email: number): Promise<Doctor | null> {
        const oneDoctor = Doctor.findOne({ where: { email: email } });

        return oneDoctor;
    }

    create(body: IDoctor) {
        return Doctor.create(body);
    }

    update(body: IDoctor, id: string) {
        return Doctor.update(body, { where: { id: id } });
    }

    delete(id: string) {
        return Doctor.destroy({ where: { id: id } });
    }

    restore(id: string) {
        return Doctor.restore({ where: { id: id } });
    }
}
