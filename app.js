const express = require("express");
const app = express();
const puertoExpress = 3030;

const path = require("path");
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));


app.listen(process.env.PORT || 3030, () => {
    console.log(`Express iniciado OK el el puerto ${puertoExpress}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"))
});

app.get("/home", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"))
});

app.get("/home_prueba", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home_prueba.html"))
});

app.post("/home", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/login.html"))
});