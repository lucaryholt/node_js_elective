const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/upload/upload.html');
});

app.get('/about', (req, res) => {
    return res.sendFile(__dirname + '/public/about/about.html');
});

app.post('/form', (req, res) => {
    console.log(req.body);

    return res.send({
        data: req.body.message
    });
});

app.listen(8070, (error) => {
   if (error) {
       console.log('Error starting server.');
   } else {
       console.log('Server started on ', 8070);
   }
});