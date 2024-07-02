//? Default Value

// const getSum = (z, x = 1, y = 0) => {   //? default value should always be set at the end
//   let sum = x + y + z;
//   return sum;
// };
// const res = getSum(5);
// console.log(res);

// const greetUser = (userName = "User") => {
//   console.log(`Good Morning ${userName}`);
// };

// greetUser("Smriti");

// greetUser();

//? ===================================Can be also done as =====================================

// const greetUser = (userName) => {
//   console.log(`Good Morning ${userName || "User"}`);
// };

// greetUser("Smriti");
// greetUser();
