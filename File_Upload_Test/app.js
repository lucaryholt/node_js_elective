const express = require("express");
const fileUpload = require("express-fileupload"); //The library that enables file upload
const fs = require('fs'); //file methods, used to read contents of directory
const uuid = require("uuid"); //makes unique id, so that we get no upload conflicts
const _ = require('lodash'); //array methods

const app = express();

//Here we enable file upload
app.use(fileUpload({
    createParentPath: true,
    safeFileNames: true
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

            return res.status(200).send(resBody);
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

app.post('/upload', async(req, res) => {
    const id = uuid.v4();
    const directory = './uploads/' + id + '/';

    try{
        if(!req.files){
            res.send({
                status: false,
                message: 'No files uploaded'
            });
        } else {
            let data = [];

            _.forEach(_.keysIn(req.files.files), (key) => {
                let file = req.files.files[key];

                file.mv(directory + file.name);

                data.push({
                    name: file.name
                });
            });

            res.status(200).send({
                shareLink: 'localhost:8080/s/' + id,
                files: data
            });
        }
    }catch (error){
        res.status(500).send(error);
    }
});

app.listen(8080, (error) => {
    if(error){
        console.log('Error starting server.');
    }
    console.log('Server started on port: ', 8080);
});