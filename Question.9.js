// Cloning:

const obj1 = { a: 1 };
const obj2 = { ...obj1 };
console.log(obj2); // Output: { a: 1 }

// Copying:

const obj1 = { a: 1 };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // Output: { a: 1 }

// Merging:

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // Output: { a: 1, b: 2 }
