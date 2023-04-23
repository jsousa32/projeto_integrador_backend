import { checkSchema } from "express-validator";

export const patientSchema = checkSchema({
    susNumber: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "Campo número do SUS é obrigatório.",
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
    password: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo senha é obrigatório.",
    },
    telephone: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo telefone é obrigatório.",
    },
});
