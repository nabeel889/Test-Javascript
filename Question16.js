// How Async JavaScript Works
// Event Loop: Keeps checking if the call stack is empty and then runs tasks from the queues.
// Call Stack: Where JavaScript runs code. It handles tasks one by one.
// Callback Queue (Macrotask Queue): Holds tasks like setTimeout and events. These run after the call stack is empty.
// Microtask Queue: Holds tasks like Promises. These run before tasks from the callback queue.
// Code Example
// javascript
// Copy code
// Async function to fetch data
async function getdata() {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
    console.log(data);
}

// Call the async function
getdata();

// Example of tasks
console.log("Start");

// Task that will run later
setTimeout(() => {
    console.log("Macrotask");
}, 0);

// Task that has higher priority
Promise.resolve().then(() => {
    console.log("Microtask");
});

console.log("End");

// What Happens:
// "Start" and "End" are logged first because they are immediate.
// "Microtask" is logged next because Promises have higher priority.
// "Macrotask" is logged last because it waits until the call stack and microtasks are done.
// This shows how JavaScript handles tasks and keeps things running smoothly.