//? Error
//? Error is inevitable

// const x = 2;

// x = 5;

// console.log("Hi");

//? Error Handling

// const x = 2;

// try {
//   x = 5;
//   console.log("Hit"); //? This line will not execute as the error is lin line 15 and it goes directly to catch
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("Send email");
// }
// console.log("Hi");

//? Example 2

// let user = 4;
// try {
//   if (!user) {
//     throw new Error("User does not exist");
//   }
//   console.log("Hey User");
// } catch (error) {
//   console.log(error.message);
// }
