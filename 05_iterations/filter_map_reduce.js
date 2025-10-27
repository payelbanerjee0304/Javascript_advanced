// ==============================================Filter=================================================

const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });
// console.log(values);
const myNums = [1, 2, 3, 4, 5, 6];
// let filterVal = myNums.filter((num) => num > 4);

// let filterVal = myNums.filter((num) => {
//   return num > 4;
// });
// const filterValue = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     filterValue.push(num);
//   }
// });
// console.log(filterValue);
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userbooks = books.filter((book) => {
  return book.genre === "Fiction";
});
// console.log(userbooks);
const userbooksPublish = books.filter((book) => {
  return book.publish >= 1995;
});
// console.log(userbooksPublish);
const userbooksPublishGenre = books.filter((book) => {
  return book.publish >= 1995 && book.genre === "Science";
});
// console.log(userbooksPublishGenre);

// =============================================MAP===============================================
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numMap = myNumbers.map((num) => num + 10);

// console.log(numMap);

const newnums = [];
myNumbers.forEach((num) => {
  newnums.push(num + 20);
});

// console.log(newnums);
// ============================================Chaining===========================================
const newnumsMapChaining = myNumbers
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 1;
  })
  .filter((num) => {
    return num > 40;
  });

// console.log(newnumsMapChaining);

// ==============================================Reduce=================================================
const myNumbersReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initialval = 2;
// const reduceNum = myNumbersReduce.reduce((acc, cur) => {
//   console.log(`acc:- ${acc} & the cur :- ${cur}`);
//   return acc + cur;
// }, initialval);
const reduceNum = myNumbersReduce.reduce(function (acc, cur) {
  // console.log(`acc:- ${acc} & the cur :- ${cur}`);
  return acc + cur;
}, initialval);
// console.log(reduceNum);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const shoppingCartAddition = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(shoppingCartAddition);
