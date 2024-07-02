//? Object Structure

//? =========================Example 1 ===================================
// const bookDetail = {
//   name: "Operation System",
//   author: "A. Tanenbaum",
//   publishedDate: "1990/01/01",
//   numberOfPages: 500,
//   coverPhoto: null,
//   price: undefined,
// };

// const { name, author, publishedDate, numberOfPages, coverPhoto, price } =  //destructuring object
//   bookDetail;

// console.log(author); //after destructure there is no need to use bookDetail.author

//?==========================Example 2 ===================================

// const obj1 = {
//   name: "Cup",
//   price: 7,
// };
// const obj2 = {
//   name: "Mouse",
//   price: 15,
// };

// const { price } = obj1;
// console.log(price);

// const { price: priceOfMouse } = obj2; //both have name 'price' so rename(:) 'price' to 'priceOfMouse'
// console.log(priceOfMouse);

//? ======================================= Example 3 ====================================================

//? For Nested Object

// const student = {
//   name: "Sandhya",
//   college: "HCOE",
//   isGraduated: false,
//   image: null,
//   address: {
//     permanent: "A",
//     temporary: "B",
//   },
// };

// const {
//   name,
//   college,
//   address: { temporary, permanent: permanentAddress },
// } = student;
// console.log(temporary);
// console.log(permanentAddress);
// console.log(`My name is ${name}`);
