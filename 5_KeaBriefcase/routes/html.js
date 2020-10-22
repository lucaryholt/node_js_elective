const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const contentHandler = require('../contentHandler.js');

const uploadPage = fs.readFileSync(path.join(__dirname + '/../public/pages/upload/upload.html')).toString();
const aboutPage = fs.readFileSync(path.join(__dirname + '/../public/pages/about/about.html')).toString();
const downloadPage = fs.readFileSync(path.join(__dirname + '/../public/pages/download/download.html')).toString();

const head = fs.readFileSync(path.join(__dirname + '/../public/fragments/head/head.html')).toString();
const footer = fs.readFileSync(path.join(__dirname + '/../public/fragments/footer/footer.html')).toString();

router.get('/', (req, res) => {
    return res.send(head + uploadPage + footer);
});

router.get('/about', (req, res) => {
    return res.send(head + aboutPage + footer);
});

router.get('/download/:id', (req, res) => {
    const file = contentHandler.getData().find(data => {
        if (data.id === req.params.id){
            return data;
        }
    });
    console.log(file);

    return res.send(head + downloadPage + footer);
});

module.exports = router;