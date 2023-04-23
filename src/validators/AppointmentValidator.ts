import { checkSchema } from "express-validator";

export const doctorSchema = checkSchema({
    date: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo data é obrigatório.",
    },
    time: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo horário obrigatório.",
    },
    DoctorId: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "Campo id médico é obrigatório.",
    },
    PatientId: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo id paciente é obrigatório.",
    },
});
