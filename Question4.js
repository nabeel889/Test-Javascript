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

function drawHollowRectangle(width, height) {
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < width; j++) {
      if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}


drawHollowRectangle(10, 5);
