const laptopList = [
  {
    name: "LOQ",
    brand: "Lenovo",
    price: 1070,
  },
  {
    name: "Aspire 5",
    brand: "Acer",
    price: 730,
  },
  {
    name: "Modern 15",
    brand: "MSI",
    price: 690,
  },
  {
    name: "Macbook Pro M3",
    brand: "Apple",
    price: 2059,
  },
  {
    name: "Inspiron G15",
    brand: "Dell",
    price: 1015,
  },
  {
    name: "Idea Pad",
    brand: "Lenovo",
    price: 1059,
  },
  {
    name: "Zenbook 15",
    brand: "MSI",
    price: 1064,
  },
];

//? 2. Increase price of Dell laptops by 10%

//? 3. Find all lenovo laptops

//? 6. Find "Zenbook 15" laptop details

//? 7. Find the sum of prices of all laptops

// TODO : Question Number 1, 4, 5

//? 1. Give 6 percent on 6:6 on each laptop

// const newPriceList = laptopList.map((item, index, array) => {
//   let newPrice = item.price + (6 / 100) * item.price;
//   return {
//     ...item,
//     price: newPrice,
//   };
// });
// console.log(newPriceList);

//? 4. Update name of "Idea Pad" to "Idea Pad Ultra"

// const updateNameList = laptopList.map((item, index, array) => {
//   if (item.name === "Idea Pad") {
//     return {
//       ...item,
//       name: "Idea Pad Ultra",
//     };
//   }
//   return { ...item };
// });
// console.log(updateNameList);

//? 5. Get all laptops whose price is below $1050

// const findLaptop = laptopList.filter((item, index, array) => item.price < 1050);
// console.log(findLaptop);
