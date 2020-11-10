const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '../index.html'));
});

// Just to test sessions

router.post('/setSession', (req, res) => {
    req.session.mySecret = req.body.mySecret;
    return res.send({ data: 'Session set' });
});

router.get('/getSession', (req, res) => {
    return res.send({ data: req.session.mySecret });
});

module.exports = router;