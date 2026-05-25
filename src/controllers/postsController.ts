import type { Response, Request } from "express";
import CustomError from "../errors/CustomError.ts";
import getRandomRGBa from "../utils/getRandomRGB.ts";
import { getMessages, insertMessage } from "../db/queries.ts";
import { validationResult } from "express-validator";

async function getPosts(req: Request, res: Response) {
    try {
        const posts = await getMessages();

        res.render("pages/index", { data: posts });
    } catch (error) {
        console.error(error instanceof Error ? error.message : error);
        throw new CustomError(500, "Something went wrong");
    }
}

async function addPost(req: Request, res: Response) {
    try {
        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            return res.status(400).render("pages/new", {
                errors: validationErrors.array(),
            });
        }

        const { user, message } = req.body;

        const messagePayload = {
            text: message,
            user: user,
            added: new Date().toLocaleDateString("sv-SE"),
            color: getRandomRGBa().join(","),
        };
        await insertMessage(messagePayload);

        res.redirect(303, "/");
    } catch (error) {
        console.error(error instanceof Error ? error.message : error);
        throw new CustomError(400, "Bad Request");
    }
}

export default { getPosts, addPost };
