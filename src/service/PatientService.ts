import { IPatient } from "../interface/IPatient";
import { Patient } from "../models/Patient";
import { GlobalService } from "./GlobalService";

export class PatientService implements GlobalService<Patient> {
    findAll(): Promise<Patient[] | null> {
        const allPatients = Patient.findAll();

        return allPatients;
    }

    findOne(id: string, scope?: string): Promise<Patient | null> {
        const onePatient = Patient.scope(scope).findOne({ where: { id: id } });

        return onePatient;
    }

    findSusNumber(susNumber: string, scope?: string): Promise<Patient | null> {
        const onePatient = Patient.scope(scope).findOne({ where: { susNumber: susNumber } });

        return onePatient;
    }

    findByEmail(email: string): Promise<Patient | null> {
        const onePatient = Patient.findOne({ where: { email: email } });

        return onePatient;
    }

    create(body: IPatient) {
        return Patient.create(body);
    }

    update(body: IPatient, id: string) {
        return Patient.update(body, { where: { id: id } });
    }

    delete(id: string) {
        return Patient.destroy({ where: { id: id } });
    }

    restore(id: string) {
        return Patient.restore({ where: { id: id } });
    }
}
