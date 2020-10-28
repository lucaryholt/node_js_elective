const router = require('express').Router();
const contentHandler = require('../contentHandler.js');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: path.join(__dirname, '../uploads') });

router.get('/uploads/:id', (req, res) => {
    const file = contentHandler.getData(req.params.id);
    return res.send(file);
});

router.post('/uploads', upload.single('file') ,(req, res) => {
    const id = contentHandler.appendData(req.body.message);

    return res.redirect('./download/' + id);
});

module.exports = router;