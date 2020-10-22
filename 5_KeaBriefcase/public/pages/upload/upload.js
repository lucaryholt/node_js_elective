function validateForm(){
    const message = $('#message-input').val();

    fetch('/form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: '{ "message": "' + message + '" }'
    })
        .then(response => response.json())
        .then(response => console.log(response));

    return true;
}