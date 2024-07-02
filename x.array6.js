//? Reduce

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//? Find sum of all numbers

// let sum = 0;
// numList.forEach((item, index, array) => {
//? forEach() for just loop
//   sum += item;
// });
// console.log(sum);

//?Now using reduce()

// const total = numList.reduce((accumulator, item, index, array) => {
//   accumulator += item;
//   return accumulator;
// }, 0);

// console.log(total);

//? Find the product of all numbers

const product = numList.reduce(
  (accumulator, item, index, array) => (accumulator *= item),
  1
);

console.log(product);
