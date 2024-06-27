//?iteration
//?loop

//?1) for
//??2)while
//?do..while

//?1)For loop

for (let i = 1; i <= 10; i = i + 1) {
  console.log(i);
}

//?WAFL(Write a For Loop) to print numbers from 100 to 50

for (let i = 100; i >= 50; i--) {
  console.log(i);
}

//?WAFL to find if a number is prime or not
//?take number grater than 1

let a = 13;

let isPrime = true;
for (let i = 2; i < a; i++) {
  let rem = a % i;
  if (rem === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "Prime Number" : "Consonant");

//? 2)While loop

let i = 1;

while (i <= 10) {
  console.log(i);

  i++;
}

//? 3) do..while

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
