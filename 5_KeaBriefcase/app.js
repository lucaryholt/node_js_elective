const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded( { extended: true }));

app.use(require('./routes/html.js'));

app.use(require('./routes/upload.js'));

app.use(require('./routes/download.js'));

app.listen(8070, (error) => {
   if (error) {
       console.log('Error starting server.');
   } else {
       console.log('Server started on ', 8070);
   }
});