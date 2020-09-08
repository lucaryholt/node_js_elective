const express = require("express");
const app = express();

// Kan gøres som one-liner
// const app = require("express")();

app.get("/", ((req, res) => {
    return res.send("<h1>Hello</h1>");
}));

app.listen(8080, (error) => {
    if(error){
        console.log(error);
        console.log("Could not start server.");
    }
    console.log("Server is running on port", 8080);
});