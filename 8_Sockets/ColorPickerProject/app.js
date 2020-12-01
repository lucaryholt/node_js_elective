const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('Socket connected!');

    socket.on('client changed color', ({ data }) => {
        console.log(data);

        // Only to specific socket
        //socket.emit('server sending the color', { data: data });

        // To all sockets in this namespace
        //io.emit('server sending the color', { data: data });

        // To all sockets, but not ifself
        //socket.broadcast.emit('server sending the color', { data: data });
    });

    socket.on('disconnect', () => {
        console.log('A socket disconnected.');
    });
})

app.get('/', (req, res) => {
    return res.send({ message: 'HEY' });
});

app.get('/colorpicker', (req, res) => {
    return res.sendFile(__dirname + '/colorpicker.html');
});

server.listen(9090, (error) => {
    if (error) console.log('Error starting server.');
    else console.log('Server started on port', 9090);
});