import { IMedicine } from "../interface/IMedicine";
import { Medicine } from "../models/Medicine";
import { GlobalService } from "./GlobalService";

export class MedicineService implements GlobalService<Medicine> {
    findAll(): Promise<Medicine[] | null> {
        const allMedicines = Medicine.findAll();

        return allMedicines;
    }

    findOne(id: string, scope?: string): Promise<Medicine | null> {
        const oneMedicine = Medicine.scope(scope).findOne({ where: { id: id } });

        return oneMedicine;
    }

    create(body: IMedicine) {
        return Medicine.create(body);
    }

    update(body: IMedicine, id: string) {
        return Medicine.update(body, { where: { id: id } });
    }

    delete(id: string) {
        return Medicine.destroy({ where: { id: id } });
    }

    restore(id: string) {
        return Medicine.restore({ where: { id: id } });
    }
}
