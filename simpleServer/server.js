const express = require("express");

const app = express();

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/img.jpeg");
});

app.listen(8080, "127.0.0.1", () => {
    console.log("Server is up!");
});