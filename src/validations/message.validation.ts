import { body } from "express-validator";

const strTypeErr = "should be a string";
const notEmptyErr = "field cannot be empty";

export const messageValidation = [
    body("user")
        .exists()
        .withMessage("Name field is required")
        .notEmpty()
        .withMessage(`Name ${notEmptyErr}`)
        .trim()
        .isString()
        .withMessage(`Name ${strTypeErr}`)
        .isLength({ min: 2, max: 32 })
        .withMessage("Name cannot be bigger than 32 and smaller than 2 characters")
        .bail({ level: "request" }),
    body("message")
        .exists()
        .withMessage("Message field is required")
        .notEmpty()
        .withMessage(`Message ${notEmptyErr}`)
        .trim()
        .isString()
        .withMessage(`Message ${strTypeErr}`)
        .isLength({ min: 2, max: 200 })
        .withMessage("Name cannot be bigger than 200 and smaller than 2 characters")
        .bail({ level: "request" }),
];
