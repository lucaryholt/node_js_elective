const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

let uploadedContent = [];

function appendData(data, file) {
    const id = crypto.randomBytes(18).toString("hex");

    fs.mkdirSync(path.join(__dirname, 'uploads', id));
    fs.renameSync(path.join(__dirname, 'uploads', file.filename), path.join(__dirname, 'uploads', id, file.originalname));

    uploadedContent.push({
        id,
        message: data,
        file
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