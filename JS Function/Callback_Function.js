function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();  // calling the callback
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

// calling main function
greetUser("Divyanshu", showEndMessage);
