// console.log(2 > 1);
// console.log("2" > 1); //true too

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

//strict check
// console.log("2" === 2);

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId); //false

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// ===============================================Memory=========================================================

// stack donot change original value
let name = "payel";
let newName = "ria";
name = newName;
console.log(newName);
console.log(name);

//heap

let obj = {
  name: "payel",
  age: 32,
};

let newObj = obj;
newObj.age = "12";

console.log(obj);
