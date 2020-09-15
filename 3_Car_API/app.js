const express = require("express");
const app = express();

app.use(express.json());

// App variables
// currentId is atm set to 2, as the list is hardcoded

let currentId = 2;

let cars = [
    { id: 1, brand: "brum" , model: "brom brom", hk: 10 },
    { id: 2, brand: "Mitsubishi", model: "Evo", hk: 350 }
];

// Support functions

function getId(){
    currentId++;
    return currentId;
}

function getCar(id){
    for(let i = 0; i < cars.length; i++){
        if(cars[i].id === id){
            return cars[i];
        }
    }
    return null;
}

function addCar(car){
    car.id = getId();
    cars.push(car);
}

function updateCar(updatedCar, car){
    if(updatedCar.brand !== undefined){
        car.brand = updatedCar.brand;
    }
    if(updatedCar.model !== undefined){
        car.model = updatedCar.model;
    }
    if(updatedCar.hk !== undefined){
        car.hk = updatedCar.hk;
    }
}

function correctCarFormat(car){
    return car.brand !== undefined & car.model !== undefined & car.hk !== undefined;
}

// HTTP Requests

app.get("/cars", (req, res) => {
    if(cars.length !== 0){
        return res.status(200).send(cars);
    }
    return res.status(404).send({ error: 'No cars in collection.' });
});

app.get("/cars/:id", (req, res) => {
    const id = Number(req.params.id)
    const car = getCar(id);
    if(car != null){
        return res.status(200).send(car);
    }
    return res.status(404).send({ error: 'No car with id: ' + id });
});

app.post("/cars", (req, res) => {
    let newCar = req.body;

    if(correctCarFormat(newCar)){
        addCar(newCar);
        return res.status(201).send({ message: 'Car saved under id: ' + newCar.id });
    }
    return res.status(406).send({ error: 'Car did not follow correct format. Needs brand, model and hk.' });
});

app.put("/cars/:id", (req, res) => {
    const id = Number(req.params.id);
    let selectedCar = getCar(id);
    const updatedCar = req.body;

    if(selectedCar !== null){
        updateCar(updatedCar, selectedCar);
        return res.status(200).send({ message : 'Updated car with id: ' + id });
    }
    return res.status(404).send({ error : 'Could not find car with that id.' });
});

app.delete("/cars/:id", (req, res) => {
    const id = Number(req.params.id);
    let selectedCar = getCar(id);

    if(selectedCar !== null){
        cars.splice(cars.indexOf(selectedCar), 1);
        return res.status(200).send({ message: 'Car deleted.', deletedCar: selectedCar });
    }
    return res.status(404).send({ error: 'Could not find car with id: ' + id });
});

// Listener

app.listen(8080, (error) => {
   if(error){
       console.log('Error starting server.');
   }
   console.log('Server started on: ', 8080);
});