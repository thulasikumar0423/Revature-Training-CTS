let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact = fact * i;
}

console.log("Factorial =", fact);

//fibonacci
let n = 7;
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= n; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}

//prime number
let num1 = 7;
let isPrime = true;

if (num1 <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num1 ); i++) {
    if (num1 % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log("Prime number");
} else {
  console.log("Not a prime number");
}

//reverse number
let num2 = 1234;
let rev = 0;

while (num2 > 0) {
  let digit = num % 10;
  rev = rev * 10 + digit;
  num2 = Math.floor(num2/ 10);
}

console.log("Reversed number =", rev);

//armstrong number
let num3 = 121;
let original = num;
let rev1 = 0;

while (num3 > 0) {
  let digit = num % 10;
  rev1 = rev1 * 10 + digit;
  num3 = Math.floor(num3 / 10);
}

if (original === rev1) {
  console.log("Palindrome number");
} else {
  console.log("Not a palindrome number");
}
