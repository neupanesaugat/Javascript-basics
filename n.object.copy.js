//? Object Copy

const print = (values) => {
  console.log(values);
};
const student1 = {
  name: "Sandhya",
  college: "HCOE",
  isGraduated: false,
  image: null,
  address: {
    permanent: "A",
    temporary: "B",
  },
};

// print(student1);

//? shallow copy
// const student2 = student1;

// student2.name = "Kalyan";

// console.log(student2);
// console.log(student1); //? both will be Kalyan

//? spread operator (...)

//? Example 1:
// const student2 = { ...student1 };
// student2.name = "Yadav";
// console.log(student2);
// console.log(student1);

//? Example 2:
// const student2 = { ...student1 };
// student2.address.permanent = "Z";
// console.log(student2);
// console.log(student1); //?still copy address of nested object

//? Deep Copy
//? structuredClone()

// const student2 = structuredClone(student1);
// student2.address.permanent = "Z";
// console.log(student2);
// console.log(student1);

//? Why to even use square bracket type
const laptopDetails = {
  name: "F15",
  brand: "Asus",
  ram: 16,
  ssd: 512,
};

let key = "brand";

console.log(laptopDetails[key]); // .(dot) operator cannot be used here
