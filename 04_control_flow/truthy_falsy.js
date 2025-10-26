const array = [];
if (array.length === 0) {
  console.log("empty arr");
} else {
}

const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("empty object");
}
// ------------------------------Nullish Coalescing Operator--------------------------------

let val1;
// val1 = 5 ?? 10;//5
// val1 = null ?? 10; //10
// val1 = undefined ?? 10; //10
val1 = undefined ?? 10 ?? 20; //10

console.log(val1);

//=======================================Ternary Operator=====================================

// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
