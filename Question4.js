function printDiamond(n) {
  // Upper part of the diamond
  for (let i = 1; i <= n; i++) {
    let str = " ".repeat(n - i);
    str += "*".repeat(2 * i - 1);
    console.log(str);
  }
  // Lower part of the diamond
  for (let i = n - 1; i >= 1; i--) {
    let str = " ".repeat(n - i);
    str += "*".repeat(2 * i - 1);
    console.log(str);
  }
}

printDiamond(4);

function printHollowRectangle(rows, cols) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= cols; j++) {
      if (i === 1 || i === rows || j === 1 || j === cols) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

printHollowRectangle(5, 10);
