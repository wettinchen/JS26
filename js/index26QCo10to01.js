// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// workflow function

const getAllUserEmails = async () => {

    const response = await fetch("http://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    console.log(userEmailArray);
};

getAllUserEmails();