function printName() {
  console.log("P");
  console.log("A");
  console.log("Y");
  console.log("E");
  console.log("L");
}
// printName();

// function addition(number1, number2) {
//   console.log(number1 + number2);
// }
// addition(2, 3); //5
// addition(2, "3"); //23
// addition(2, null); //2
function addition(number1, number2) {
  let result = number1 + number2;
  // console.log("hi");
  // return result;
  return number1 + number2;
}

const ourAdd = addition(3, 5);
// console.log("Result: ", ourAdd);

// function loggingUserMsg(username) {
function loggingUserMsg(username = "abc") {
  //by default if no parameter pass
  // if (username === undefined) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loggingUserMsg("Payel")); //Payel just logged in
// console.log(loggingUserMsg()); //undefined just logged in

function calculateCartPrice(val1, val2, ...num1) {
  // return val1;
  return num1;
}
// console.log(calculateCartPrice(200, 300, 400, 1000));//[ 400, 1000 ]

let user = {
  username: "payel",
  price: 299,
};

function handleObj(anyobject) {
  // console.log(
  //   `username is ${anyobject.username} & price is ${anyobject.price}`
  // );
}
// handleObj(user);
handleObj({
  username: "sam",
  price: 599,
}); //direct object

const myArr = [100, 200, 300, 400];

function returnSecondVal(getArray) {
  return getArray[3];
}
// console.log(returnSecondVal(myArr));
console.log(returnSecondVal([800, 500, 1000, 4000, 6000]));
