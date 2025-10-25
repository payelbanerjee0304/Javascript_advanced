//Immediately invoked function expression(IIFE)
//this is cally named iife
(function newFun() {
  console.log(`DB connected`);
})(); //iife works (fun)()
// newFun();
(() => {
  console.log(`DB connected 2nd`);
})(); //iife works (fun)()

((name) => {
  console.log(`My name : ${name}`);
})("payel"); //iife works (fun)()
