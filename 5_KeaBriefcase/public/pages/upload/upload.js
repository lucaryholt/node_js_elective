/*const form = document.getElementById('myForm');
form.onsubmit = async (e) => {
    e.preventDefault();

    fetch('/uploads', {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => response.json())
        .then(result => console.log(result));
}*/

/*function validateForm(){
    const message = $('#message-input').val();

    const formData = new FormData(form);

    console.log(formData);

    fetch('/uploads', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            formData
        })
    })
        .then(response => response.json())
        .then(result => console.log(result));

}*/
