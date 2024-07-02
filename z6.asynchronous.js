//? Asynchronous

//? Synchronous => Existing or occurring at the same time

//? Asynchronous => Not existing or occurring at the same time

//? node => single threaded

// console.log("Hi");

// setTimeout(() => {
//   console.log("Timeout"); //? As this function takes 2 sec timeout to print hence the Hello print don't get block in case of node js
// }, 2000);

// console.log("Hello");

//? Example 2

// console.log("Nepal");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 4000);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// console.log("South Africa");

//? Example 3

// const multiply = (num1, num2) => {
//   return num1 * num2;
// };

// const square = (n) => {
//   const squaredNumber = multiply(n, n);

//   return squaredNumber;
// };

// const printNumber = () => {
//   const result = square(4);
//   console.log(result);
// };

// printNumber();

//? Recursive
//! Error : Maximum call stack size exceeded

// const sayHi = () => {
//   sayHi();
// };

// sayHi();
