//? Callback Function
//? Function which is passed as an argument to another function
//? is called callback function

//? Higher Order Function :
//? 1) Callback Function (function as an argument to another function)
//? 2) Closure  (function returning function)

// const getSum = (x, y, func) => {
//   let sum = x + y;
//   func(sum);
// };

// getSum(5, 7, (value) => {
//   console.log(value);       //? This function called by a 'func' function and this is called a callback function
// });

//? Function returning function
//? Closure => function + lexical environment (surrounding environment)

// const makeAdder = (x) => {
//? Function is called first class citizen as they can be directly saved inside a variable in js
//   const doSum = (y) => {
//     let sum = x + y;
//     return sum;
//   };
//   return doSum;
// };

// const doSum5 = makeAdder(5);  //? doSum5 remembers the value of x which is 5, as it is returned by doSum
// const sum = doSum5(10);
// console.log(sum);

//? another process to call

// const sum = makeAdder(25)(5);
// console.log(sum);

//? Aesthetic

// const makeAdder = (x) => (y) => x + y;

// const sum = makeAdder(25)(5);
// console.log(sum);
