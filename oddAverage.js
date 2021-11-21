const prompt = require("prompt-sync")();

let oddSum = 0;

let numbersNeeded = 6;

while (numbersNeeded > 0) {
  const userNum = parseInt(prompt("Please enter a number "));
  if (userNum % 2 === 1) {
    oddSum += userNum;
  }
  numbersNeeded--;
}

average = oddSum / 6;

console.log(`Average: ${average}`);
