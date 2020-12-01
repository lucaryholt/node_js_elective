const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const escape = require('escape-html');

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Socket connected!');

    socket.on('client enter chatroom', ({ data }) => {
        socket.join(data.chatroom);
        io.to(data.chatroom).emit('server send message', { data: { username: 'server', message: 'user ' + escape(data.username) + ' has joined the chatroom' } })
    });

    socket.on('client send message', ({ data }) => {
        io.to(data.chatroom).emit('server send message', { data: { username: escape(data.username), message: escape(data.message) } });
    });
});

app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/public/index.html');
});

server.listen(9090, (error) => {
    if (error) console.log('Error starting server');
    else console.log('Server started on', 9090);
});