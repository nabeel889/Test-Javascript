// Rest Operator (...): Used to gather arguments or array elements into an array.

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Output: 6

// Spread Operator (...): Used to spread elements of an array or properties of an object.

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]


