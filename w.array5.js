//? Find
//? Find the first item in array which satisfies the condition
//? It returns value not array
//? If any item does not satisfy condition, it returns undefined

// const numList = [-15, 25, 10, 55, -95, 63, 75];

//? Find the item greater than 20

// const value = numList.find((item, index, array) => item > 20);
// console.log(value);

//? Array of object
const userList = [
  {
    id: 1,
    name: "Smriti",
    email: "smriti@gmail.com",
  },
  {
    id: 2,
    name: "Shubham",
    email: "suv@gmail.com",
  },
  {
    id: 3,
    name: "Samundra",
    email: "sam@gmail.com",
  },
  {
    id: 4,
    name: "Utsarga",
    email: "uts@gmail.com",
  },
  {
    id: 5,
    name: "Smarika",
    email: "smk@gmail.com",
  },
];

//? Find user whose gmail is "sam@gmail.com"

// const relatedUser = userList.find((item) => item.email === "sam@gmail.com");
// console.log(relatedUser);

//? findIndex
//? return index of that item

// const relatedUser = userList.findIndex(
//   (item) => item.email === "sam@gmail.com"
// );
// console.log(relatedUser);
