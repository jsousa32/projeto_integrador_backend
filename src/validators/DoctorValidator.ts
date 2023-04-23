import { checkSchema } from "express-validator";

export const doctorSchema = checkSchema({
    crm: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "Campo número do CRM é obrigatório.",
    },
    name: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo nome é obrigatório.",
    },
    email: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo e-mail é obrigatório.",
    },
    speciality: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo especialidade é obrigatório.",
    },
    telephone: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo telefone é obrigatório.",
    },
});
