const fH = require('./fileHandler');

module.exports = {
    checkTimeout: function (uploadDir){
        function checker(){
            const currentTime = new Date().getTime();
            const directories = fH.readDirectory(uploadDir)
            //console.log('checking', currentTime);
            //console.log(directories);
            for(let i = 0; i < directories.length; i++){
                const dirTime = Number(directories[i].slice(36));
                if(currentTime - dirTime > 3600000){
                    console.log('dir: ' + directories[i] + ' is too old!');
                    fH.deleteDir(uploadDir + directories[i]);
                }
            }
        }

        setInterval(checker, 30000);
    }
}