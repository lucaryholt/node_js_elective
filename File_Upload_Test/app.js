const express = require("express");
const fileUpload = require("express-fileupload"); //The library that enables file upload

const app = express();

//Here we enable file upload
app.use(fileUpload({
    createParentPath: true
}));

app.use(express.json()); //Helps to read body from request
app.use(express.urlencoded({ extended: true }));

app.post('/upload', async (req, res) => {
   try{
        if(!req.files){
            res.status(400).send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let file = req.files.file; //'file' is the name we give the input field in html / http request

            file.mv('./uploads/' + file.name); //'.mv' function moves file to specified folder and file name

            res.status(201).send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: file.name,
                    size: file.size
                }
            });
        }
   } catch (error){
        res.status(500).send(error);
   }
});

app.listen(8080, (error) => {
    if(error){
        console.log('Error starting server.');
    }
    console.log('Server started on port: ', 8080);
});