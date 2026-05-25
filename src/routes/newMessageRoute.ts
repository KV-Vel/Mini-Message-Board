import { Router } from "express";
import { messageValidation } from "../validations/message.validation.ts";
import postsController from "../controllers/postsController.ts";
const newMessageRoute = Router();

newMessageRoute.get("/", (req, res) => res.render("pages/new"));
newMessageRoute.post("/", messageValidation, postsController.addPost);

export default newMessageRoute;
