import { IAppointment } from "../interface/IAppointment";
import { Appointment } from "../models/Appointment";
import { Doctor } from "../models/Doctor";
import { Patient } from "../models/Patient";
import { GlobalService } from "./GlobalService";

export class AppointmentService implements GlobalService<Appointment> {
    findAll(): Promise<Appointment[] | null> {
        const allAppointments = Appointment.findAll({
            include: [
                { model: Patient, attributes: ["name", "susNumber"] },
                { model: Doctor, attributes: ["name", "crm"] },
            ],
        });

        return allAppointments;
    }

    findOne(id: string, scope?: string): Promise<Appointment | null> {
        const oneAppointment = Appointment.scope(scope).findOne({ where: { id: id } });

        return oneAppointment;
    }

    findByDateAndCrm(date: string, crm: string): Promise<Appointment[]> {
        const allAppointmentsOnDate = Appointment.findAll({ where: { date: date, DoctorCrm: crm } });

        return allAppointmentsOnDate;
    }

    findByDateAndSus(date: string, susNumber: string): Promise<Appointment | null> {
        const allAppointmentsOnDate = Appointment.findOne({
            where: { date: date, PatientSusNumber: susNumber },
            include: [
                { model: Patient, attributes: ["name", "susNumber"] },
                { model: Doctor, attributes: ["name", "crm"] },
            ],
        });

        return allAppointmentsOnDate;
    }

    findBySusNumber(susNumber: string): Promise<Appointment[]> {
        const allAppointmentsOnDate = Appointment.findAll({
            where: { PatientSusNumber: susNumber },
            include: [
                { model: Patient, attributes: ["name", "susNumber"] },
                { model: Doctor, attributes: ["name", "crm", "speciality"] },
            ],
        });

        return allAppointmentsOnDate;
    }

    findByDateAndTime(date: string, time: string, id: string): Promise<Appointment[]> {
        const allAppointmentsOnDate = Appointment.findAll({ where: { date: date, time: time, DoctorId: id } });

        return allAppointmentsOnDate;
    }

    create(body: IAppointment) {
        return Appointment.create(body);
    }

    update(body: IAppointment, id: string) {
        return Appointment.update(body, { where: { id: id } });
    }

    delete(id: string) {
        return Appointment.destroy({ where: { id: id } });
    }

    restore(id: string) {
        return Appointment.restore({ where: { id: id } });
    }
}
