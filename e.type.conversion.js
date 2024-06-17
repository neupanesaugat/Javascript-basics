//?string to number conversion

const x = "45"; //numeric string

const y = Number(x);
const y = +x; //equivalent to Number(x)

console.log(y, typeof y);

//? parseInt, parseFloat

const m = "11";

const n = parseInt(m);
console.log(n, typeof n);

const m = "11.55";

const n = parseFloat(m);
console.log(n, typeof n);

//? to string conversion

const isMarried = String(true);

console.log(isMarried, typeof isMarried);

const userName = "Smriti";

Hi I am Smriti
console.log("Hi, I am", userName);

//?string concatenation
console.log("2" + "3");

console.log("Hi, I am " + userName + ".");

//?template literal
// console.log(`Hi, I am ${userName}.`);

const x = 12;

const y = `${x}`;
console.log(y, typeof y);
