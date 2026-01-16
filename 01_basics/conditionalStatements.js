// Conditional Statements - 12 Jan 2026

let age = 20;

if(age>18){
    console.log("Adult")
}

let ageOfVoting = 17;
if(age>18){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}

// else if

console.log("Else - If Statements")

let score = 85;
console.log("Your Grade Is :")
if(score>90){
    console.log("A+")
}
else if(score>80){
    console.log("A")
}
else if(score>70){
    console.log("B")
}
else if(score>60){
    console.log("C")
}
else if(score>50){
    console.log("D")
}
else{
    console.log("Fail")
}


// ============== Switch Statement =================

console.log("Switch - Statement")

let day = 3;

switch (day) {
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
  default:
    console.log("Invalid day");
}
