function calculateSum(limit) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
      if (i % 2 === 0) {
          sum += i;
      }
  }
  return sum;
}
console.log(calculateSum(10));

// Answer:
// Let's break down what this function does step by step.

// Function Explanation:

// The function calculateSum takes a single argument limit.
// It initializes a variable sum to 0.
// It then runs a for loop from i = 1 to i = limit (inclusive).
// Inside the loop, it checks if i is even (i % 2 === 0). If true, it adds i to sum.
// Finally, it returns the value of sum.
// Execution with limit = 10:

// Loop iterations:
// i = 1 → odd → sum = 0
// i = 2 → even → sum = 0 + 2 = 2
// i = 3 → odd → sum = 2
// i = 4 → even → sum = 2 + 4 = 6
// i = 5 → odd → sum = 6
// i = 6 → even → sum = 6 + 6 = 12
// i = 7 → odd → sum = 12
// i = 8 → even → sum = 12 + 8 = 20
// i = 9 → odd → sum = 20
// i = 10 → even → sum = 20 + 10 = 30
// Final Result:

// The sum of even numbers between 1 and 10 is 30.