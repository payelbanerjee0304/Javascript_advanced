let myArr = [1, 2, 3, 4, 5];
// console.log(myArr[0]);
let newArr2 = new Array("a", "b", "c");

//array methods
// myArr.push(7, 8, 9);
// myArr.pop();
// myArr.unshift("cd");
// myArr.shift();

// console.log(myArr.includes(4));
// console.log(n.indexOf(1));
// console.log(newArr2.indexOf(1));
// let newArr3 = myArr.join("_");
// console.log(myArr);
// console.log(newArr3);
// console.log(typeof newArr3); //string

//++++++++++++++++++++++++++++++++++++Slice/Splice++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log("A", myArr);
// let newA1 = myArr.slice(1, 3);
// console.log("newA1", newA1);
// console.log("B", myArr);

// let newA2 = myArr.splice(1, 3);
// console.log(newA2);
// console.log("C", myArr); //change old array

//++++++++++++++++++++++++++++++++++++++++Methods+++++++++++++++++++++++++++++++++++++++++++++++++++++++

const newArray = ["a", "b", "c"];
const newArray2 = ["d", "e", "f"];
// newArray.push(newArray2);
// console.log(newArray);
// console.log(newArray[3][0]);
const array1 = newArray.concat(newArray2);
// console.log(array1);

//=====================================Spread Operator==========================================================
const newArr = [...newArray, ...newArray2];
// console.log(newArr);
// ===================================Array Flat==========================================================
const arrayNew = [1, 2, 3, [4, 5, 6], 7, [8, 9, [1, 2, 3]]];
const new1 = arrayNew.flat(Infinity);
// console.log(new1);

// ==============================Array Convertion============================================================

console.log(Array.isArray("Payel")); //false;
console.log(Array.from("Payel")); //[ 'P', 'a', 'y', 'e', 'l' ]

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1, s2, s3)); //[ 100, 200, 300 ]
