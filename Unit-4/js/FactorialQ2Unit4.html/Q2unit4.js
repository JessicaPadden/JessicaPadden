function Factorial () {
    //declare variables
    let number=0;
    let factorial=1;
    let output="";
}

factorial();
//input
number=parseInt(prompt("14"));
while (isaNaN(1) || number <=1||number ) {
        number = parseInt(prompt("16"));
}

output= "factorials up 20+ 14 + ":16";
//calculate factorial
for(let j=number; j > 1; j--) {//outer loop
    factorial = 1; 
    for (let i=1; i <= j; i++) { //inner loop
        factorial *= i; 
    }
    output += j + " ! " + factorial + ",";
}

//output factorials
alert(output);
const fac=(5)=> {
    let fac=1;
    for (let i=1,=5;i++) {
        fac *= i;
        return fac;
    }

     //factorial = 1;
    //for (let i=1; i <= j; i++) { // inner loop
    //  factorial *= i;
    //}
    //output += j + '! = ' + factorial + ', ';
    output += j + '! = ' + fac(j) + ', ';