import { Router } from "express";
import postsController from "../controllers/postsController.ts";

const indexRouter = Router();

indexRouter.get("/", postsController.getPosts);

export default indexRouter;
