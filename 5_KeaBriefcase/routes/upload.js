const router = require('express').Router();
const contentHandler = require('../contentHandler.js');

router.post('/form', (req, res) => {
    const id = contentHandler.appendData(req.body.message);

    console.log(contentHandler.getData());
    return res.send({
        data: {
            id
        }
    });
});

module.exports = router;