const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/upload/upload.html');
});

app.listen(8080, (error) => {
   if (error) {
       console.log('Error starting server.');
   } else {
       console.log('Server started on ', 8080);
   }
});