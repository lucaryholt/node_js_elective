const express = require("express");
const app = express();

// Kan gøres som one-liner
// const app = require("express")();

app.use(express.json());
//app.use(express.urlencoded());

app.get("/", ((req, res) => {
    return res.send("<h1>Hello</h1>");
}));

app.get("/me", ((req, res) => {
    return res.send({ name : "Luca", age : 25, legs : 2 });
}));

const months =
    ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];

const weekdays =
    ["Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"];

app.get("/time", ((req, res) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = months[today.getMonth()];
    const day = weekdays[today.getDay()];
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return res.send({ year, month, day, time });
}));

app.get("/querystring", (req, res) => {
    if(req.query.text == null){
        return res.send({ error: "Need 'text' query." });
    }
    return res.send({ query: 'Your value: ' + req.query.text});
});

app.get("/message/:message", (req, res) => {
    const path = req.params.message;
    const query = req.query.queryString;
    return res.send({ path, query });
});

app.post("/body", (req, res) => {
    return res.send(req.body);
});

app.listen(8080, (error) => {
    if(error){
        console.log(error);
        console.log("Could not start server.");
    }
    console.log("Server is running on port", 8080);
});