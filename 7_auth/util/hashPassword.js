const bcrypt = require('bcrypt');

(async () => {
    if (process.argv[2] !== undefined) {
        try {
            const hashedPassword = await bcrypt.hash(process.argv[2], 10);
            console.log(hashedPassword);
        } catch (e) {
            console.log('Internal error.');
        }
    } else console.log('Need password as argument.');
})();