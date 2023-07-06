// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// Promises

// 3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
        resolve("Yes, resolved the promise!");
    } else {
        reject("No, rejected the promise!");
    }
});

console.log(myPromise);

myPromise
.then(value => {
    return value + 1;
})
.then(newValue => {
    console.log(newValue);
})
.catch(error => {
    console.error(error);
});