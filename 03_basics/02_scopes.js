let a = 200;
const b = 300;
// var c = 400;

if (true) {
  let a = 20;
  const b = 30;
  // var c = 40;
  // console.log("Inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// ----------------------------------nested function---------------------------------------

function one() {
  const username = "Payel";
  function two() {
    const website = "Youtube";
    // console.log(username);
  }
  // console.log(website);
  two();
}
one();

// ----------------------------------ifelse scope-----------------------------------------------
if (true) {
  const username = "Payel";
  if (username === "Payel") {
    const website = "Youtube";
    // console.log(username + website);//right scope
  }
  // console.log(website);
}
// console.log(username);
console.log(addon(2));

function addon(num1) {
  return num1 + 1;
}
console.log(addon(2));

// console.log(addTwo(5)); //we can't declare before execute

const addTwo = function (num1) {
  //addTwo is called an expression3
  return num1 + 2;
};
console.log(addTwo(5));
