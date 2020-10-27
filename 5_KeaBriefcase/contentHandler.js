const crypto = require('crypto');

let uploadedContent = [];

function appendData(data) {
    const id = crypto.randomBytes(18).toString("hex");

    uploadedContent.push({
        id,
        message: data
    });

    return id;
}

function getData(id) {
    return uploadedContent.find(upload => upload.id === id);
}

module.exports = {
    appendData,
    getData
}