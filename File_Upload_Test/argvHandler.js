module.exports = {
    processArgv: function (argv){
        let uploadDir = './uploads/';
        let ip = 'localhost:8080';
        let port = 8080;

        const dirIndex = argv.indexOf('--dir');
        if(dirIndex !== -1 && argv.length > dirIndex + 1){
            uploadDir = argv[dirIndex + 1];
        }

        const ipIndex = argv.indexOf('--ip');
        if(ipIndex !== -1 && argv.length > ipIndex + 1){
            ip = argv[ipIndex + 1];
        }

        const portIndex = argv.indexOf('--port');
        if(portIndex !== -1 && argv.length > portIndex + 1){
            port = Number(argv[portIndex + 1]);
        }

        console.log('Upload directory: ', uploadDir);
        console.log('IP: ', ip);
        console.log('Port: ', port);

        return {
            uploadDir,
            ip,
            port
        };
    }
}