// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// 2nd parameter of Fetch

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();

    console.log(jsonJokeData.joke);
};

getDadJoke();