const express = require("express");
const fileUpload = require("express-fileupload"); //The library that enables file upload
const fs = require('fs'); //file methods, used to read contents of directory
const uuid = require("uuid"); //makes unique id, so that we get no upload conflicts

const app = express();

//Here we enable file upload
app.use(fileUpload({
    createParentPath: true
}));

app.use(express.json()); //Helps to read body from request
app.use(express.urlencoded({ extended: true }));

app.get('/s/:id', (req, res) => {
    const id = req.params.id;

    try{
        if(id != null){
            const files = fs.readdirSync('./uploads/' + id);

            let resBody = []

            for(let i = 0; i < files.length; i++){
                resBody.push({
                    name: files[i],
                    downloadLink: 'localhost:8080/download/' + id + '/' + files[i]
                });
            }

            res.status(200).send(resBody);
        }
    }catch (error){
        console.log(error);
    }
    return res.status(400).send({ error: 'No such id.' });
});

app.get('/download/:id/:name', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;

    try{
        if(id != null && name != null){
            const file = './uploads/' + id + '/' + name;
            return res.download(file);
        }
    }catch (error){
        console.log(error);
    }
    return res.status(400).send({ error: 'No such file.' });
});

//TODO upload several files to same folder
app.post('/upload', async (req, res) => {
    const id = uuid.v4();
    const directory = './uploads/' + id + '/';

    try{
        if(!req.files){
            res.status(400).send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let file = req.files.file; //'file' is the name we give the input field in html / http request

            file.mv(directory + file.name); //'.mv' function moves file to specified folder and file name

            res.status(201).send({
                status: true,
                message: 'File is uploaded',
                data: {
                    //id : id,
                    //path: directory + file.name,
                    //size: file.size,
                    shareLink: 'localhost:8080/s/' + id
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