function validateForm(){
    const message = $('#message-input').val();
    const file = $('#file-input');
    console.log(file[0]);
    return false;

    if (message !== '') {
        fetch('/uploads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message
            })
        })
            .then(response => response.json())
            .then(result => {
                window.location.href = '/download/' + result.id;
            });
        return true;
    }
    return false;
}
