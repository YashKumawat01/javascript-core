// Operators - 12 Jan 2026

// ========= Arithmetic Operators ==============

let a = 5;
let b = 4;

console.log(a + b); // 9
console.log(a - b); // 1
console.log(a * b); // 20
console.log(a / b); // 1.25
console.log(a % b); // 1  // % is NOT percentage. It’s remainder.
console.log(a ** b); // 625
console.log(a ** 2); // 25

// ========= Assignment Operators ==============

let x = 10;

x += 5; // x = x + 5
console.log(x);

x -= 2; // x = x - 2
console.log(x);

x *= 3; // x = x * 3
console.log(x);

x /= 2; // x = x / 2

console.log(x);

// ========= Comparison Operators ==============

console.log(5 == "5"); // true  (type coercion)
console.log(5 === "5"); // false  (correct)
console.log(5 !== "5"); // true

// ========= Logical Operators ==============

let age = 22;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed");
}
console.log(!true); // false

// ========= Unary Operators ==============

let count = 5;

count++;
console.log(count)
count--;
console.log(count)
console.log(typeof count); // "number"

// ========= Ternary Operators ==============

let ageOfVoting = 17;

let result = ageOfVoting >= 18 ? "Adult" : "Minor";
console.log(result);
