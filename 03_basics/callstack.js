function newfun() {
  console.log("one");
  newfun2();
}

function newfun2() {
  console.log("two");
  newfun3();
}

function newfun3() {
  console.log("three");
}
newfun();
newfun2();
newfun3();
