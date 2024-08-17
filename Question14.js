// Promise: Represents a value that may be available now, later, or never.

// then: Executes after the promise is resolved.

// catch: Executes after the promise is rejected.

let p1 = new Promise((resolve, reject) => {
  reject(" rej 1");
});

p1.catch(() => {
  console.log(" i am rejected ");
});

// let p1 = new Promise((resolve, reject) => {
//   resolve();
// });

// p1.then(() => {
//   console.log(Promise);
// });
