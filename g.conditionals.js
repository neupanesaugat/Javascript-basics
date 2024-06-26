//?conditionals

//?Sequential Flow

console.log("Hi");

console.log(2 + 3);

console.log("Hello");

// ?if
// ?if..else
// ?if..else if..else
// ?switch
// ? ternary

//?if

console.log("Hi");
if (2 === 3) {
  console.log(2 + 3);
}
console.log("Hello");

//?if..else

if ("Nepal" !== "Nepal") {
  console.log(2 + 3);
} else {
  console.log("Hello");
}

//? Find if a number is odd or even

let num = 100;
let rem = num % 2;

if (rem === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

//? if... else if ...else

//?Find polarity of a number

let a = -25;

if (a < 0) {
  console.log("-ve");
} else if (a > 0) {
  console.log("+ve");
} else {
  console.log("Neutral");
}

//? suppose any three positive numbers, find greatest among them

let a = 100;
let b = 70;
let c = 600;

if (a > b && a > c) {
  console.log(`${a} is the greatest number`);
} else if (b > c) {
  console.log(`${b} is the greatest number`);
} else {
  console.log(`${c} is the greatest number`);
}

//? switch(best for multiple choice questions)

let dayNumber = 6;

switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid!");
}

//? ternary

let x = 20;

let remainder = x % 2;

remainder === 0 ? console.log("Even") : console.log("Odd");

//? conditional(ternary) operator chaining example

a = 0;
a < 0
//   ? console.log("Negative")
  : a > 0
//   ? console.log("Positive")
  : console.log("Neutral");
