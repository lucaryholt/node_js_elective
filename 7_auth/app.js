require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const session = require('express-session');
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

const rateLimiter = require('express-rate-limit');

const authLimiter = rateLimiter({
    windowMs: 10 * 60 * 1000,
    max: 6
});

const routeLimiter = rateLimiter({
    windowMs: 20 * 60 * 1000,
    max: 10
});

app.use(routeLimiter);
app.use('/auth', authLimiter);

app.use(require('./routes/auth.js'));

app.use(require('./routes/authPages.js'));

app.listen(8080, (error) => {
    if (error) console.log('Error starting server.');
    else console.log('Server started on port', 8080);
});