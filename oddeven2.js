const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(userInput) {
  const number = parseInt(userInput, 10);
  if (isNaN(number)) {
    console.log("Please enter a valid number.");
  } else if (number % 2 === 0) {
    console.log("Entered value is even");
  } else {
    console.log("Entered value is odd");
  }
  rl.close();
});