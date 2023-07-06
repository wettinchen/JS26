// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// Callbacks

function firstFunction(parameters, callback) {
    // do stuff
    callback();
}

// AKA "callback hell"
firstFunction(parameters, function() {
    // do stuff
    secondFunction(parameters, function() {
        thirdFunction(parameters, function() {

        });
    });
});
    
