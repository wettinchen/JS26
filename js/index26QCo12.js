// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// Promises

// Async / Await

const jokeObject = {
    id: "0oO71TSv4Ed",
    joke: "Why was it called the dark ages? Because of all the knights."
};

const postData = async (jokeObj) => {
    
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
};
postData(jokeObject);