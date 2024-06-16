//? data types
//string
//number
//boolean
//undefined
//null
//object
//bigInt
//symbol

//? 1) string
//? "",'',`` (inside any of these)

 let userName = "raman@123";
 console.log(userName);
/ console.log(typeof userName);

 let x = "5";
 console.log(x);
console.log(typeof x);

//? 2)number
 let x = 1;
 console.log(x);
console.log(typeof x);

 let x = Infinity;
 console.log(x);
 console.log(typeof x);

 let x = 4 / 0;
 console.log(x);
 console.log(typeof x);

//?NAN = Not A Number
 let x = "abc" / 2;
 console.log(x);
 console.log(typeof x);
//?float is also number
 let x = 4.487584;
 console.log(x);
 console.log(typeof x);

//? 3) boolean => true/false

 let isSunnyDay = false;
 console.log(isSunnyDay, typeof isSunnyDay);

//? 4) undefined
//? js cannot guess data type

 let x;
 console.log(x, typeof x);

 let x = undefined;
 console.log(x, typeof x);

//? 5) null

 let x = null;
 console.log(x, typeof x);

//? 6) object

 const studentDetail = {
   fName: "Saugat",
   lName: "Neupane",
   address: "A",
 };
 console.log(studentDetail, typeof studentDetail);

//?array is also an object

 const numList = [25, 55, 65, 11, 23];
 console.log(numList, typeof numList);
