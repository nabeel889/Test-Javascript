function processArray(arr) {
  let evenCount = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddSum += arr[i];
    }
  }
  if (evenCount > oddSum) {
    return "More evens";
  } else if (evenCount < oddSum) {
    return "More odds";
  } else {
    return "Equal evens and odds";
  }
}
console.log(processArray([1, 2, 3, 4, 5, 6]));

// Explanation:
// Even numbers: 2, 4, 6, so evenCount = 3.
// Odd numbers: 1, 3, 5, so oddSum = 1 + 3 + 5 = 9.
// In this case, oddSum (9) is greater than evenCount (3), so the correct output is "More odds".