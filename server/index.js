require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router");
const ErrorMiddleware = require("./middleware/error-maddleware");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
        exposedHeaders: ["Set-Cookie"],
    })
);

app.use("/api", router);
app.use(ErrorMiddleware);

const server = async () => {
    try {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

server();
