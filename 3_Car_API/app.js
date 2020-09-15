const express = require("express");
const app = express();

//TODO array af JSON objekter - implementer
//Metode til håndtere ID inkrementer

let cars = [
    { id: 1, name: "brom brom" },
    { id: 2, model: "Mitsubishi"}
];

app.get("/cars", (req, res) => {
    return res.send(cars);
});

app.get("/cars/:id", (req, res) => {
    return res.send({ });
});

app.post("/cars/:id", (req, res) => {
    return res.send({ });
});

app.put("/cars/:id", (req, res) => {
    return res.send({ });
});

app.delete("/cars/:id", (req, res) => {
    return res.send({ });
});

app.listen(8080, (error) => {
   if(error){
       console.log('Error starting server.');
   }
   console.log('Server started on: ', 8080);
});