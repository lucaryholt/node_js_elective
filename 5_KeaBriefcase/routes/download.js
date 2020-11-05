const router = require('express').Router();
const contentHandler = require('../contentHandler.js');
const path = require('path');

router.get('/downloadfile/:id', (req, res) => {
    const fileObject = contentHandler.getData(req.params.id);
    return res.download(path.join(__dirname, '../uploads', req.params.id, fileObject.file.originalname));
});

module.exports = router;