const router = require('express').Router();

router.get('/test', (req, res) => {
    return res.send('test-complete');
});

router.post('/form', (req, res) => {
    console.log(req.body);

    // Must return the ID of the uploaded files

    return res.send({
        data: req.body.message
    });
});

module.exports = router;