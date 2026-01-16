//  Question 1

// Given a number (1–7), print the day name.

let number1 = 5;

switch (number1) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid Day");
}

// Question 2

/* Problem:

Given two numbers and an operator, perform the operation.

Input:
a = 10, b = 5, operator = "*"

*/

let a = 10,
  b = 5;

let operator = "*";

switch (operator) {

  case "+":
    console.log(a + b);
    break;

  case "-":
    console.log(a - b);
    break;

  case "*":
    console.log(a * b);
    break;

  case "/":
    console.log(a / b);
    break;

  default:
    console.log("Invalid operator");
}


// Question 3

/*
Problem:
Numbers 1–5 → Weekday
6–7 → Weekend
*/
let day = 6;

switch (day) {
  case 6:
  case 7:
    console.log("Weekend");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weekday");
    break;
  default:
    console.log("Invalid day");
}
