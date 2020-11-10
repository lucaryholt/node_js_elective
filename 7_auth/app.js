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

app.use(require('./routes/auth.js'));

app.use(require('./routes/authPages.js'));

app.listen(8080, (error) => {
    if (error) console.log('Error starting server.');
    else console.log('Server started on port', 8080);
});