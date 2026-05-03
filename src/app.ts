import express from "express";

const app = express();

app.get("/", (req, res) => {});

app.listen(process.env.PORT || 3000, (error) => {
    if (error) {
        throw error;
    }

    console.log("Launched");
});
