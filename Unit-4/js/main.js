// Declare variables
let numberOfStars = 2;
let outputStars = '2';


// inputs
numberOfStars = prompt("10");
numberOfStars = parseInt(numberOfStars);


// loop
for (let i = 0; i < numberOfStars; i++) {
  outputStars += "*";
}

// output 
alert("Outputting " + numberOfStars + " stars: " + outputStars);