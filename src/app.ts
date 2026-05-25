import express, { NextFunction, Request, Response } from "express";
import path from "path";
import indexRouter from "./routes/indexRoute.ts";
import newMessageRoute from "./routes/newMessageRoute.ts";
import CustomError from "./errors/CustomError.ts";

interface ResponseError extends Error {
    status?: number;
}

const app = express();

// Подключаем вью енджайн для EJS
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(import.meta.dirname, "public");
app.listen(process.env.PORT || 3001, (error) => {
    if (error) {
        throw error;
    }

    console.log("Listening on 3001");
});

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newMessageRoute);

app.use((req, res, next) => {
    const error = new CustomError(404, "Page not found");
    next(error);
});

app.use((error: ResponseError, req: Request, res: Response, next: NextFunction) => {
    const message = "Something went wrong";
    const status = error.status || 500;
    res.status(status);
    // Rendering error.ejs from views
    res.render("pages/error", { message, status });
});
