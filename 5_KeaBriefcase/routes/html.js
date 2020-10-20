const path = require('path');

const router = require('express').Router();
const fs = require('fs');

console.log(__dirname);

const uploadPage = fs.readFileSync(path.join(__dirname + '/../public/upload/upload.html')).toString();
const aboutPage = fs.readFileSync(path.join(__dirname + '/../public/about/about.html')).toString();
const downloadPage = fs.readFileSync(path.join(__dirname + '/../public/download/download.html')).toString();

const footer = fs.readFileSync(path.join(__dirname + "/../public/footer/footer.html")).toString();

router.get('/', (req, res) => {
    return res.send(uploadPage + footer);
});

router.get('/about', (req, res) => {
    return res.send(aboutPage + footer);
});

router.get('/download', (req, res) => {
    return res.send(downloadPage + footer);
});

module.exports = router;