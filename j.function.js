//? Function

//?DRY => Do not Repeat Yourself
//? Objective : Code reusability, reduce code redundancy, single point of failure

// let userName = "Ram";
// function sayHello(userName) {
//   console.log(`Hello ${userName}`); //?It will call Smriti and Pratik because advantage to its own variable.
// }
// sayHello();   //?calling function

// sayHello("Smriti");
// sayHello("Pratik");

// function getSum(x, y) {
//   let sum = x + y;
//   console.log(sum);
// }

// getSum(2, 3);

// function getSum(x, y) {
//   let sum = x + y;
//   return sum;
// }

// console.log(getSum(2, 3));

// let sum = 0;
// function getSum(x, y) {
//   sum = x + y;
// }

// getSum(2, 3);
// console.log(sum);

//?Arrow Function
//? ()=>{}

//?Case 1

// const sayHi = (studentName) => {
//   console.log(`Hi, ${studentName}`);
// };
// sayHi("Suyasha");

//?Case 2

// const sayHi = (studentName = "user") => {
//   console.log(`Hi, ${studentName}`); //?It will print Suyasha if not passed anything will print user.
// };
// sayHi("Suyasha");

//?Case 3

// const sayHi = (studentName) => { //?studentName is treated as let studentName
//   studentName = "Prashant";
//   console.log(`Hi, ${studentName}`);//?It will print Prashant
// };
// sayHi("Suyasha");

// const doSum = (x, y) => {
//   x = +x;
//   y = +y; //?Now the strings were overwrite with number datatype
//   let sum = x + y;
//   return sum;
// };
// let result = doSum("5", "7");
// console.log(result);

//?WAP to print product of two numbers

// const doProduct = (num1, num2) => {
//   const product = num1 * num2;

//   return product;
// };

// const productResult = console.log(doProduct(5, 6));

//?Equivalent Code(one liner):

// const doProduct = (num1, num2) => num1 * num2;

// const productResult = console.log(doProduct(5, 6));

//?WAF that checks whether a number si odd or even.

//? 1st way
// const checkOddEven = (num) => {
//   let result;
//   let rem = num % 2;
//   if (rem === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }
//   return result;
// };
// const results = checkOddEven(10);
// console.log(results);

//? 2nd way

// const checkOddEven = (num) => (num % 2 === 0 ? "even" : "odd");

// const result = checkOddEven(10);
// console.log(result);

//?WAF to check polarity of a number
//?function should return "positive"/"negative"/"zero"

// const checkPolarity = (num) =>
//   num > 0 ? "positive" : num < 0 ? "negative" : "zero";

// const result = checkPolarity(-45);
// console.log(result);

