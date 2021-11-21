const prompt = require("prompt-sync")();

let positiveSum = 0;
let negativeSum = 0;

let numbersNeeded = 6;

while (numbersNeeded > 0) {
  const userNum = parseInt(prompt("Please enter a number "));

  userNum > 0 ? (positiveSum += userNum) : (negativeSum += userNum);

  numbersNeeded--;
}

console.log(`Sum of +ve numbers: ${positiveSum}
Sum of negative numbers: ${negativeSum}`);
