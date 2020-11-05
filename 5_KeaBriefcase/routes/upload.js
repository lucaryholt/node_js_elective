const router = require('express').Router();
const contentHandler = require('../contentHandler.js');
const path = require('path');
const multer = require('multer');
const upload = multer({
    dest: path.join(__dirname, '../uploads'),
    preservePath: true
});

router.get('/uploads/:id', (req, res) => {
    const file = contentHandler.getData(req.params.id);
    return res.send(file);
});

router.post('/uploads', upload.single('file') ,(req, res) => {
    const id = contentHandler.appendData(req.body.message, req.file);
    return res.send({ downloadID: id });
});

module.exports = router;