const router = require('express').Router();
const contentHandler = require('../contentHandler.js');

router.get('/uploads/:id', (req, res) => {
    const file = contentHandler.getData(req.params.id);
    return res.send(file);
});

router.post('/uploads', (req, res) => {
    const id = contentHandler.appendData(req.body.message);

    return res.send({ id });
});

module.exports = router;