const express   = require("express");
const app       = express();
const path      = require("path");

app.listen(3030, () => {
    console.log("Express corriendo OK");
});

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"))
});

app.get("/home", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"))
});

