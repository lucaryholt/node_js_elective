const express = require('express');
const fileUpload = require('express-fileupload'); //The library that enables file upload
const fs = require('fs'); //file methods, used to read contents of directory
const uuid = require('uuid'); //makes unique id, so that we get no upload conflicts
const _ = require('lodash'); //array methods
const ejs = require('ejs'); //thymeleaf type library

const app = express();

const ip = 'localhost:8080';
const port = 8080;

//TODO keep alive time for files - delete after 24 hours maybe
//maybe just file in folder? with timestamp in
//method that checks once in a while on timestamps
//https://stackoverflow.com/questions/19167297/in-node-delete-all-files-older-than-an-hour
//https://stackoverflow.com/questions/27072866/how-to-remove-all-files-from-directory-without-removing-directory-in-node-js

//TODO move uploads folder to external drive
//possibly with runtime arg

//TODO section up the code

//TODO https certificate
//https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

//Here we enable file upload
app.use(fileUpload({
    createParentPath: true,
    safeFileNames: true,
    preserveExtension: 6
}));

app.use(express.json()); //Helps to read body from request
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        ip: ip
    });
});

app.get('/s/:id', (req, res) => {
    const id = req.params.id;

    try{
        if(id != null){
            const files = fs.readdirSync('./uploads/' + id);

            let resBody = []

            for(let i = 0; i < files.length; i++){
                resBody.push({
                    name: files[i],
                    downloadLink: ip + '/download/' + id + '/' + files[i]
                });
            }

            //return res.status(200).send(resBody);

            return res.render('downloadPage', {
                files: resBody
            });
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
            let fileData = [];

            if(req.files.files.length === undefined){
                let file = req.files.files;

                file.mv(directory + file.name);

                fileData.push({
                    name: file.name
                });
            } else {
                _.forEach(_.keysIn(req.files.files), (key) => {

                    let file = req.files.files[key];

                    file.mv(directory + file.name);

                    fileData.push({
                        name: file.name
                    });
                });
            }

            return res.render('uploadComplete',{
                files: fileData,
                shareLink: ip + '/s/' + id
            });
        }
    }catch (error){
        return res.status(500).send(error);
    }
});

app.listen(port, (error) => {
    if(error){
        console.log('Error starting server.');
    }
    console.log('Server started on port: ', port);
});