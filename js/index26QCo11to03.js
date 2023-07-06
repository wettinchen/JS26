// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// 2nd parameter of Fetch

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "text/plain"
        }
    });
    const textJokeData = await response.text();

    console.log(textJokeData);
};

getDadJoke();