//for of
// const arr = [1, 2, 3, 4, 5];
// for (const val of arr) {
//   console.log(val);
// }

// const str = "hello world";
// for (const st of str) {
//   if (st == " ") {
//     continue;
//   }
//   console.log(st);
// }

// ========================================Map==========================================
const map = new Map();
map.set("IN", "India");
map.set("USA", "United state of america");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United state of america',
//   'Fr' => 'France'
// }

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}
// IN :- India
// USA :- United state of america
// Fr :- France

const myObject = {
  game1: "Spiderman",
  game2: "Mummy",
  game3: "COC",
};
// for (const [key, value] of myObject) {
//   console.log(key, ":-", value); // myObject is not iterable
// }

// for (const key in myObject) {
//   // console.log(key);
//   // console.log(myObject[key]);
//   console.log(`key is ${key} and the value is ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  // console.log(`${key} is the key, ${programming[key]} is the value`);
}

for (const key in map) {
  console.log(key);
}
