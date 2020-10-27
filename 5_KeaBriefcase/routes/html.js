const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const contentHandler = require('../contentHandler.js');

const uploadPage = fs.readFileSync(path.join(__dirname + '/../public/pages/upload/upload.html')).toString();
const aboutPage = fs.readFileSync(path.join(__dirname + '/../public/pages/about/about.html')).toString();
const downloadPage = fs.readFileSync(path.join(__dirname + '/../public/pages/download/download.html')).toString();

const header = fs.readFileSync(path.join(__dirname + '/../public/fragments/header/header.html')).toString();
const footer = fs.readFileSync(path.join(__dirname + '/../public/fragments/footer/footer.html')).toString();

router.get('/', (req, res) => {
    return res.send(header + uploadPage + footer);
});

router.get('/about', (req, res) => {
    return res.send(header + aboutPage + footer);
});

router.get('/download/:id', (req, res) => {
    return res.send(header + downloadPage + footer);
});

module.exports = router;