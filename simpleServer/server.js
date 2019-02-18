const express = require("express");
const rp = require("request-promise");

const app = express();

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/img.jpeg");
});

app.listen(8080, "127.0.0.1", () => {
    console.log("Server is up!");
});