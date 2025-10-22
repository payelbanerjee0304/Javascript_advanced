//Singleton

// Object.create

//object literals

mySymbol = Symbol("abc");

const JsUser = {
  name: "Payel",
  [mySymbol]: "mysym1",
  place: "Kolkata",
  email: "p@gmail.com",
  isLoggedIn: false,
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySymbol]);
// console.log(typeof JsUser[mySymbol]);

JsUser.email = "payel@gmail.com";
// console.log(JsUser);
// Object.freeze(JsUser);
JsUser.email = "ap@gmail.com";
// console.log(JsUser);
JsUser.greetings = function () {
  // console.log(`hello ${this.name}`);
};
// console.log(JsUser.greetings); //[Function (anonymous)]
// console.log(JsUser.greetings()); //hello

// ==================================Next part=============================================================
const tinderUser = {};

tinderUser.id = 123;
tinderUser.name = "Payel";
tinderUser.place = "kolkata";
tinderUser.id = 123;
// console.log(tinderUser);

const newUser = {
  email: "abc@gmail.com",
  fullName: {
    username: {
      firstName: "Payel",
      lastName: "Banerjee",
    },
  },
};
// console.log(newUser.fullName.username.firstName);
const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };
// const obj3 = { obj1, obj2 };
const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);
const obj4 = { ...obj1, ...obj3 };
// console.log(obj4);

const newobj = [
  {
    id: 1,
    email: "a",
  },
  {
    id: 2,
    email: "b",
  },
  {
    id: 3,
    email: "c",
  },
  {
    id: 4,
    email: "d",
  },
];

// console.log(newobj[1].email); //b
let tinderKeys = Object.keys(tinderUser);
console.log(tinderKeys); //[ 'id', 'name', 'place' ]
let tinderValues = Object.values(tinderUser);
console.log(tinderValues); //[ 123, 'Payel', 'kolkata' ]
console.log(tinderUser.hasOwnProperty("name")); //true
