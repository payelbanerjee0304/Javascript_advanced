const user = {
  username: "Payel",
  price: 1099,
  welcomeMsg: function () {
    // console.log(`${this.username}, welcome to our website`);
    // console.log(this);
  },
};

// user.welcomeMsg();
// user.username = "sam";
// user.welcomeMsg();
// console.log(this);

function payel() {
  let username = "payel";
  // console.log(this);
  //<ref *1> Object [global] {
  //   global: [Circular *1],
  //   clearImmediate: [Function: clearImmediate],
  //   setImmediate: [Function: setImmediate] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //   },
  //   clearInterval: [Function: clearInterval],
  //   clearTimeout: [Function: clearTimeout],
  //   setInterval: [Function: setInterval],
  //   setTimeout: [Function: setTimeout] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //   },
  //   queueMicrotask: [Function: queueMicrotask],
  //   structuredClone: [Function: structuredClone],
  //   atob: [Function: atob],
  //   btoa: [Function: btoa],
  //   performance: [Getter/Setter],
  //   fetch: [Function: fetch],
  //   navigator: [Getter],
  //   crypto: [Getter]
  // }
  // PS E:\Javascript 2025\Youtube JS chai with code\Javascript_advanced> node 03_basics/03_arrow_functions.js
  // <ref *1> Object [global] {
  //   global: [Circular *1],
  //   clearImmediate: [Function: clearImmediate],
  //   setImmediate: [Function: setImmediate] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //   },
  //   clearInterval: [Function: clearInterval],
  //   clearTimeout: [Function: clearTimeout],
  //   setInterval: [Function: setInterval],
  //   setTimeout: [Function: setTimeout] {
  //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
  //   },
  //   queueMicrotask: [Function: queueMicrotask],
  //   structuredClone: [Function: structuredClone],
  //   atob: [Function: atob],
  //   btoa: [Function: btoa],
  //   performance: [Getter/Setter],
  //   fetch: [Function: fetch],
  //   navigator: [Getter],
  //   crypto: [Getter]
  // }
  // console.log(this.username); //undefined
}
payel();
// -----------------------------------Arrow functions------------------------------
//arrow fun
// const chai = () => {
//   let username = "payel";
//   console.log(this.username); //undefined
//   console.log(this); //{}
// };
// chai();
//normal fun
// const chai = function () {
//   let username = "payel";
//   console.log(this.username); //undefined
//   console.log(this); //all same like function
// };
// chai();

// const add = (num1, num2) => {
//   return num1 + num2;
// };
// const add = (num1, num2) => {
//   return num1 + num2;
// };
// const add = (num1, num2) => num1 + num2;
// const add = (num1, num2) => num1 + num2;
// const add = (num1, num2) => (num1 + num2);
const add = (num1, num2) => ({
  username: "payel",
}); //to return an object we need to write within parenthesis(),this means { username: 'payel' }

// console.log(add(2, 3));
