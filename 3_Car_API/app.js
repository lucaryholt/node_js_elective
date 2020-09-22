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
function getCar(id){
    return cars.find(car => car.id === id);
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

app.get('/', (req, res) => {
    return res.send({
        data : {
            server : 'Express',
            jsFramework : 'Node.JS',
            endPoints : {
                path : '/cars',
                method : 'GET'
            }
        }
    });
});

app.get("/cars", (req, res) => {
    if(cars.length !== 0){
        return res.status(200).send(cars);
    }
    return res.status(404).send({ error: 'No cars in collection.' });
});

app.get("/cars/:id", (req, res) => {
    const id = Number(req.params.id);
    const car = getCar(id);
    if(car != null){
        return res.status(200).send(car);
    }
    return res.status(404).send({ error: 'No car with id: ' + id });
});

app.post("/cars", (req, res) => {
    let newCar = req.body;

    if(correctCarFormat(newCar)){
        currentId++;
        newCar.id = currentId;
        cars.push(newCar);
        return res.status(201).send({ message: 'Car saved under id: ' + newCar.id });
    }
    return res.status(406).send({ error: 'Car did not follow correct format. Needs brand, model and hk.' });
});

app.patch("/cars/:id", (req, res) => {
    const id = Number(req.params.id);

    cars = cars.map(car => {
        if(car.id === id){
            return { ...car, ...req.body, id: car.id };
        }
        return car;
    });

    return res.send({ data: cars });
});

app.delete("/cars/:id", (req, res) => {
    const id = Number(req.params.id);
    const filteredContent = cars.filter(car => car.id !== id);

    return res.status(200).send({ message: 'Car deleted.', remainingCars: filteredContent });
});

// Listener
//const port = process.env.PORT || 80;
const port = process.env.PORT ? process.env.PORT : 80;

app.listen(port, (error) => {
   if(error){
       console.log('Error starting server.');
   }
   console.log('Server started on:', Number(port));
});