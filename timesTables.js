const prompt = require("prompt-sync")();

let num = parseInt(prompt("Please enter a number "));

while (num !== 1) {
  for (let i = 1; i <= 12; i++) {
    const ans = i * num;
    console.log(`${i} x ${num} = ${ans}`);
  }
  num = parseInt(prompt("Please enter a number "));
}

console.log("Game Over");
