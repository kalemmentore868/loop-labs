const prompt = require("prompt-sync")();

// const firstNum = parseInt(prompt("Please enter a number "));
// const secondNum = parseInt(prompt("Please enter a number "));
// const thirdNum = parseInt(prompt("Please enter a number "));
// const fourthNum = parseInt(prompt("Please enter a number "));
// const fifthNum = parseInt(prompt("Please enter a number "));

// const sum = firstNum + secondNum + thirdNum + fourthNum + fifthNum;

// console.log(`Sum: ${sum}`);

const numbersToSum = parseInt(
  prompt("Please enter the amount of numbers to sum ")
);
let sum = 0;
let iteration = 0;
let productOfNums = 1;

// do {
//   let num = parseInt(prompt("Please enter a number "));
//   sum += num;
//   iteration++;
// } while (iteration < numbersToSum);

// console.log(sum);

while (iteration < numbersToSum) {
  const num = parseInt(prompt("Please enter a number "));
  sum += num;
  productOfNums *= num;
  iteration++;
}

const average = sum / numbersToSum;

console.log(`Average: ${average}
Product: ${productOfNums}`);
