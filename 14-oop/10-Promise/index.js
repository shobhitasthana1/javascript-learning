const prm = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 3000);
});

prm
    .then(function () {
        console.log("Resolved");
    })
    .catch(function () {
        console.log("Reject");
    });