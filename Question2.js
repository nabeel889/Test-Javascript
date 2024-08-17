function checkNumber(value) {
  let result = '';
  switch (true) {
      case (value > 10):
          result = 'Greater than 10';
          break;
      case (value < 5):
          result = 'Less than 5';
          break;
      default:
          result = 'Between 5 and 10';
  }
  return result;
}
console.log(checkNumber(7));
console.log(checkNumber(11));

// Explanation:

// For checkNumber(7), since 7 is not greater than 10 and not less than 5, it falls into the default case.
// For checkNumber(11), since 11 is greater than 10, it matches the first case.