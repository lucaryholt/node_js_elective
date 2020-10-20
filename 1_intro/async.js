/*new Promise((resolve, reject) => {
   setTimeout(() => {
       reject("yeah");
   }, 3000);
})
    .then(output => console.log(output))
    .catch(output => console.log("Error:", output));*/


function returnPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hyeo");
        }, 5000);
    });
}

/*function callMyPromise() {
    //returnPromise().then(output => console.log(output));
    returnPromise().then(console.log);
}

callMyPromise();*/

(async () => {
    try {
        console.log(await returnPromise());
    } catch (error) {
        console.log(error);
    }
})();
