const prompt = require("prompt-sync")();

let biggestNum = 0;
let smallestNum;

let numbetSet = 5;

const name = prompt("What is your name? ");
let age = parseInt(prompt("Please enter age between 10-16 "));

while (numbetSet > 0) {
  if (10 < age && age < 16) {
    const userNum = parseInt(prompt("Please enter a number "));
    userNum > biggestNum ? (biggestNum = userNum) : (smallestNum = userNum);
    if (smallestNum === undefined) {
      smallestNum = userNum;
    } else if (biggestNum === undefined) {
      biggestNum = userNum;
    }
    numbetSet--;
  } else {
    age = parseInt(prompt("Please enter age between 10-16 "));
  }
}

console.log(`Biggest Number: ${biggestNum}, smallest Number: ${smallestNum}`);
