const num1 = 100;
// console.log(num1);

const num2 = new Number(200);
// console.log(num2);
// console.log(num2.toString().length);
// console.log(num2.toFixed(2));
// console.log(num2.toPrecision(5));

let num3 = 1000000;
// console.log(num3.toLocaleString());
// console.log(num3.toLocaleString("en-IN"));

//++++++++++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.pow(2, 3));
// console.log(Math.min(32.56, 9, 1, 90)); //1
// console.log(Math.max(32.56, 9, 1, 90)); //90

const min = 10;
const max = 20;

//formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
