const express = require('express');
const router = express.Router();

router.get('/logout', (req, res) => {
    return res.status(501).send();
});

router.post('/login', (req, res) => {
    return res.status(501).send();
});

router.post('/singup', (req, res) => {
    return res.status(501).send();
});

module.exports = router;