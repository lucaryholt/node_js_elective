const express = require("express");
const app = express();

app.get("/cars", (req, res) => {
    return res.send({ });
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