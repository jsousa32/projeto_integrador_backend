import { checkSchema } from "express-validator";

export const medicineSchema = checkSchema({
    name: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo nome é obrigatório.",
    },
    manufacturer: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "Campo fabricante é obrigatório.",
    },
    quantity: {
        in: ["body"],
        isInt: true,
        notEmpty: true,
        errorMessage: "Campo quantidade é obrigatório.",
    },
    packaging: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo embalagem é obrigatório.",
    },
    recommendation: {
        in: ["body"],
        isString: true,
        notEmpty: true,
        errorMessage: "Campo recomendação é obrigatório.",
    },
});
