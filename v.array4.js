//? Filter (there is some condition to satisfy)
//? 1. returns new array
//? 2. There is high chance of
//? original array length !== returned array length
//? 3. it selects/deselect value
//? 4. it does not change array item

// const numList = [1, 10, 33, -6, -99, 97, -100];

//?Filter positive number
// const newNumList = numList.filter((item, index, array) => item > 0); //?It returns item which is a truthy value so it can be made one liner

// console.log(newNumList);

// const productList = [
//   {
//     id: 1,
//     name: "Night vision glass",
//     price: 5,
//   },
//   {
//     id: 2,
//     name: "Gloves",
//     price: 7,
//   },
//   {
//     id: 3,
//     name: "Helmet",
//     price: 25,
//   },
// ];

//? Find all items whose price is less than 10

// const newProductList = productList.filter(
//   (item, index, array) => item.price < 10
// );

// console.log(newProductList);
