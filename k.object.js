//?  Object
//? key - value pair
//?key or propery or field


// const studentDetails = {};
// console.log(studentDetails, typeof studentDetails);

// const obj1 = {};
// const obj2 = {};
// console.log(obj1 === obj2); //false

//?student 1
// let firstName = "Rohan";
// let lastName = "Bhandari";
// let permanentAddress = "Baneshwor";
// let temporaryAddress = "Sydney";
// let isGraduated = true;

//?student 2
// let firstName2 = "Milan";
// let lastName2 = "Khadka";
// let permanentAddress2 = "Birgunj";
// let temporaryAddress2 = "Kathmandu";
// let isGraduated2 = false;

// let student1 = {
//   firstName: "Rohan",
//   lastName: "Bhandari",
//   permanentAddress: "Baneshwor",
//   temporaryAddress: "Sydney",
//   isGraduated: true,
// };

//console.log(student1);

//?Print My name is Roshan Bhandari

// console.log(`My name is ${student1.firstName} ${student1.lastName}`);

//?To access value in object:
//? 1) dot operator
//? 2) square bracket operator

//? 1) Dot operator
// console.log(student1.firstName);

//? 2) Square bracket operator
// console.log(student1["isGraduated"]);
// console.log(student1["temporaryAddress"]);

//? CRUD
//? C => Create/Add
//? R => Read/Retrieve
//? U => Update/Edit
//? D => Delete/Remove

// let student1 = {
//   firstName: "Rohan",
//   lastName: "Bhandari",
//   isGraduated: true,
//   address: {
//     permanent: "Baneshwor",
//     temporary: "Sydney",
//   },
// };

//? Read

// console.log(student1.address.permanent);
// console.log(student1["address"]["temporary"]);
// console.log(student1["address"].permanent);
// console.log(student1.address["temporary"]);

//? Upsert (Update or Insert)

// student1.firstName = "Roshna";
// student1.age = "27";

// console.log(student1.firstName);
// console.log(student1.age);
// console.log(student1);

// student1["address"]["permanent"] = "Birgunj";
// console.log(student1);

//? Delete

// let nationDetail = {
//   name: "Nepal",
//   population: "3 crore",
//   perCapita: 1400,
// };

// delete nationDetail.name;
// delete nationDetail["name"];
// console.log(nationDetail);

// const cupDetails = {
//   name: "Water cup",
//   brand: "Serve well",
//   color: "Pink",
//   color: "Green",
//   name: "Tea cup",
// };
// console.log(cupDetails);
