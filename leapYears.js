const prompt = require("prompt-sync")();

//Leap years are divisible by 4
//if first year % 4 == 0 its a leap
//console log it
//console log first year + 4
//untils its less than or equal to second year
//if second year % 4 == 0 its a leap

let startingYear = parseInt(prompt("Please enter a starting year "));
const endingYear = parseInt(prompt("Please enter an ending year "));

while (startingYear <= endingYear) {
  if (startingYear % 4 === 0) {
    console.log(startingYear);
  } else {
    startingYear -= startingYear % 4;
  }
  startingYear += 4;
}
