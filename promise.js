let hiPromise = new Promise((resolve, reject) => {
    // do some very time consuming code
    setTimeout(() => {
        reject();
    }, 5000);
});
hiPromise.then(() => {
    console.log("hi");
});
hiPromise.catch(() => {
    console.log("error occured")
});
console.log("I can't wait");