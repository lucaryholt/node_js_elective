const uuid = require('uuid');

let uploadedContent = [];

function appendData(data) {
    const id = uuid.v4();

    uploadedContent.push({
        id,
        message: data
    });

    return id;
}

function getData() {
    return uploadedContent;
}

module.exports = {
    appendData,
    getData
}