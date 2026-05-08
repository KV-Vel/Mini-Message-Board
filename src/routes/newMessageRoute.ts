import { Router } from "express";
import postsController from "../controllers/postsController.ts";
const newMessageRoute = Router();

newMessageRoute.get("/", (req, res) => res.render("pages/new"));
newMessageRoute.post("/", postsController.addPost);

export default newMessageRoute;
