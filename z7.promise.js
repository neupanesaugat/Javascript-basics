//? Promise => Something that happens in the future

//? tri state
//? pending
//? success
//? failure

//? to get result,  we need to resolve promise

//? 1) call back function





// //? 2) .then. catch

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let randomNumber = Math.random();

//     if (randomNumber > 0.5) {
//       resolve(randomNumber);
//     } else {
//       reject("Too small number");
//     }
//   }, 2000);
// });

// promise 
//  .then((result)=>{ 
//     console.log(result); 
//   }) 
// .catch((error)=>{ 
//     console.log(error); 
// })


//? 3) async await

// const getRandomNumber = async () => {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.log(error, "error");
//   }
// };

// getRandomNumber();
