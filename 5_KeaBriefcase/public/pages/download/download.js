const uploadId = window.location.href.split('/').pop();

fetch('../uploads/' + uploadId)
    .then(response => response.json())
    .then(result => {
        $('#message').text(result.message);
    });