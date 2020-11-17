const router = require('express').Router();

const bcrypt = require('bcrypt');
const saltRounds = 12;

router.get('/auth/logout', (req, res) => {
    return res.status(501).send();
});

router.post('/auth/login', (req, res) => {
    return res.status(501).send();
});

router.post('/auth/singup', (req, res) => {
    return res.status(501).send();
});

module.exports = router;