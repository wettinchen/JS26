// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

// Promises

// 3 states: Pending, Fulfilled, Rejected

const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
};

const anotherFunction = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
};

anotherFunction();
console.log(myUsers.userList)