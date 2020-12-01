const socket = io();

let username = undefined;
let chatroom = undefined;

function enterChatRoom() {
    username = document.getElementById('username-input').value;
    chatroom = document.getElementById('chatroom-input').value;

    socket.emit('client enter chatroom', { data: { username, chatroom } });
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    messageInput.value = '';

    socket.emit('client send message', { data: { username, chatroom, message } });
}

socket.on('server send message', ({ data }) => {
    $('#message-hook').append('<span>' + data.username + ': ' + data.message +  '</span><br>');
});