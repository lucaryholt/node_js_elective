const fs = require('fs'); //file methods, used to read contents of directory
const _ = require('lodash'); //array methods

module.exports = {
    readDirectory: function (path){
        return fs.readdirSync(path);
    },
    getFileList: function (files, ip, id) {
        let resBody = [];

        for (let i = 0; i < files.length; i++) {
            resBody.push({
                name: files[i],
                downloadLink: ip + '/download/' + id + '/' + files[i]
            });
        }

        return resBody;
    },
    moveFiles: function (files, directory, callback){
        let fileData = [];

        try{
            if(files.length === undefined){
                let file = files;

                callback(file, directory + file.name);

                fileData.push({
                    name: file.name
                });
            } else {
                _.forEach(_.keysIn(files), (key) => {

                    let file = files[key];

                    callback(file, directory + file.name);

                    fileData.push({
                        name: file.name
                    });
                });
            }
        }catch (error){
            console.log(error);
        }

        return fileData;
    },
    deleteDir: function (dir){
        fs.rmdir(dir, { recursive : true}, (error) => {
            if(error){
                console.log('error deleting', dir);
            }
        });
    }
}