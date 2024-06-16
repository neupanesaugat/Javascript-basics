//? operator => symbol which has certain meaning

//arithmetic operator
//assignment operator
//comparison operator
//logical operator

//? 1) arithmetic operator
//? + , - , * , / , ** , %

// x+2

console.log(2 + 3);
console.log(2 - 3);
console.log(2 / 3);
console.log(2 ** 3);
console.log(25 % 2);
//? . after changing vane use Math.floor and more explore library
console.log(Math.floor(25 / 2));

//? 2) assignment operator (=, +=, -=, /=, **=, %=)
let x = 2;

x += 5; // x = x + 5;
console.log(x);

let z = 3;
z -= 1;
console.log(z);

let num = 51;
num %= 2; //num  = num % 2;
console.log(num);

//? 3) comparison operator (==, ===, !=, !==, <, <=, >, >=)
//? always result in boolean

let x = 3;
let y = "3";

//? == => weak comparison, checks only value
//? === => strict comparison, value + data type

console.log(x == y);
console.log(x === y);

let m = "A";
let n = "a";

console.log(m === n);

let m = "Arun";
let n = "arun";

console.log(m === n);

let m = "Arun";
let n = "arun";

console.log(m.toLowerCase() === n.toLowerCase());
console.log("abc".toUpperCase());

let i = 5;
let j = 6;

console.log(i != j);

let i = 5;
let j = "6";

console.log(i !== j);

//? 4)Logical Operator
//? AND(&&)
//? OR(||)
//? NOT(!=)

console.log(true && false);
console.log(true || false);
console.log(!true);

let condition1 = 3 > 5;
let condition2 = "nepal" === "Nepal";

console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(!condition1);
