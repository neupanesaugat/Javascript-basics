// ? constant

//? in js, constant means which cannot be reassigned

// const x = 7;
// x = 9;

//? Mutation => process of having change
//? Mutate => change
//? Mutable => changeable
//? Immutable => unchangeable

//? primary data type(string, number, boolean, undefined, null) => cannot be reassigned, thus immutable
//? non primary data type(object) => cannot be reassigned, but mutable

//?immutable
// const isDeveloped = false;
// isDeveloped = true;
// console.log(isDeveloped);

//?mutable
// const phoneDetails = {
//   brand: "Samsung",
// };
// phoneDetails.brand = "Apple";
// console.log(phoneDetails);

//?but cannot be reassigned
// phoneDetails = true; //?constant cannot be reassigned

//?Freeze(don't Upsert the value inside object)
// const obj1 = Object.freeze({
//   name: "Rohan",
// });

// obj1.name = "Sarita";
// console.log(obj1);

// const obj1 = {
//   name: "A",
//   age: 25,
// };
// const obj2 = {
//   name: "B",
//   age: 26,
// };

// TODO: after array
// console.log(Object.entries(obj1));
// console.log(Object.entries(obj2)); //?return array

// const obj1Keys = Object.keys(obj1);
// const obj2Keys = Object.keys(obj2);

// console.log(obj1Keys, obj2Keys);

// console.log(Object.values(obj1));

