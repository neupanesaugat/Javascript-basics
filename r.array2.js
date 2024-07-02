//? Methods in array

//? Push, Pop, Shift, Unshift, Reverse, Includes, Sort, Slice, Splice

//? Push => to add element(s) to end of array
//? Pop => to remove last element form the array

//? Push
// const numList = [10, 11, 12];

// numList.push(13, 14, 15);
// console.log(numList);

//? Pop

// numList.pop();
// numList.pop();
// console.log(numList);

//? Shift => To remove from item from array
//? Unshift => to add item(s) at starting of array

// let studentList = ["Saugat", "Shubham", "Samundra", "Smriti"];

//  studentList.shift();

// studentList.unshift("Suyasha", "Utsarga", "Unik");
// console.log(studentList);

//? Reverse => reverses the order of items in array
//? toReversed => returns new array after reversing order of original array

// const priceList = [15, 25, 35, 45];

// priceList.reverse();
// const newPriceList = priceList.toReversed(); //?Don't change the original array just generate new array of reverse order

// console.log(newPriceList);
// console.log(priceList);

//? Includes => checks whether array contains specific value or not
//? Result in boolean

// const laptops = ["MacBook M3", "TUF F15", "Nitro 5", "A15"];

// const result = laptops.includes("A15");
// console.log(result);

// const currentRoute = "/user/edit/1";   //?Because string is also array of character

// const result = currentRoute.includes("edit");
// console.log(result);

//? Sort => ascending or descending (Dictionary Sort)

// let studentList = [
//   "Saugat",
//   "Abhishek",
//   "Yadav",
//   "Smriti",
//   "Yeshika",
//   "Lokendra",
// ];

// studentList.sort(); //? Ascending Sort
// studentList.sort().reverse(); //?Descending Sort
// console.log(studentList);

// let numList = [1, 100, 11, 39, 294, 37, 5, 2, 93];

// numList.sort(); //? Dictionary Sort
// numList.sort((a, b) => a - b); //? Callback Function(Function is passed as parameter inside a function) {Ascending Order}
// numList.sort((a, b) => b - a); //? Descending Order
// console.log(numList);

//? Slice => to get portion of array form original array
//? Returns new array with portion of original array
//? When given start and end => start is included, item of end index is excluded

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// const newList = animals.slice(2); //?start
// const newList = animals.slice(1, 3); //?start,end

// console.log(newList);

//? Splice => remove or replace existing items
//? changes original array

// const months = ["Jan", "Mar", "Apr", "May", "Jun"];

// months.splice(3); //?removes item from this index
// months.splice(2, 2); //?first parameter:startIndex secondParameter:deleteCount

// months.splice(1, 0, "Feb");
// months.splice(5, 0, "Jul", "Aug", "Sep");
// console.log(months);
