import { checkSchema } from "express-validator";

export const userSchema = checkSchema({
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
});
