for (let i = 0; i < 10; i++) {
  const element = i;
  if (element === 5) {
    // console.log("new no,5");
  }
  // console.log(element);
}

for (let i = 0; i < 10; i++) {
  // console.log(`Outer loop:${i}`);
  for (let j = 0; j < 10; j++) {
    // console.log(`Inner loop:${j}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArr = ["a", "b", "c"];
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  // console.log(element);
}

//=================================break & continue==================================
for (let index = 0; index < 10; index++) {
  // const element = array[index];
  if (index === 5) {
    console.log(`Detected 5`);
    // break;//ends all even 5 will not print
    continue; // skip that print of 5
  }
  console.log(`print ${index}`);
}
