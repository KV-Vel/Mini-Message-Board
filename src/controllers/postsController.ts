import db from "../db.ts";
import type { Response, Request, NextFunction } from "express";
import CustomError from "../errors/CustomError.ts";
function getPosts(req: Request, res: Response, next: NextFunction) {
    try {
        const posts = db.data;

        res.render("pages/index", { data: posts });
    } catch (error) {
        const err = new CustomError(500, error?.message || "Something went wrong");
        next(err);
    }
}

function addPost(req: Request, res: Response, next: NextFunction) {
    try {
        const { user, message } = req.body;

        db.addItem({ text: message, user: user, added: new Date().toLocaleDateString("sv-SE") });
        res.redirect("/");
    } catch (error) {
        const err = new CustomError(400, error?.message || "Something went wrong");
        next(err);
    }
}

export default { getPosts, addPost };
