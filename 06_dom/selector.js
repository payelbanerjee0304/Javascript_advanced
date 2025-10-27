const title = document.getElementById("title");
// <h1 id=​"title" class=​"heading">​" DOM learning on Chai aur code "<span style=​"display:​ none">​test text​</span>​</h1>​
// document.getElementById('title').id
// // 'title'
// document.getElementById('title').class
// undefined
// document.getElementById('title').className
// 'heading'
// document.getElementById('title').getAttribute('id
// VM306:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// document.getElementById('title').getAttribute('id')
// 'title'
// document.getElementById('title').getAttribute('class')
// 'heading'
// document.querySelector('h2')
// <h2>​Lorem ipsum dolor sit.​</h2>​
// document.querySelector('input[type="password"]')
// <input type=​"password" name id>​
// document.querySelector('ul')
// <ul>​…​</ul>​
// const myul=document.querySelector('ul')
// undefined
// myul.querySelector('li')
// <li class=​"list-item">​…​</li>​
// let myli=myul.querySelector('li')
// undefined
// myli.style.backgroundColor="green"
// 'green'
// myli.innerText="FIVE"
// 'FIVE'
// const myList = document.querySelectorAll('li')
// undefined
// myList.style.backgroundColor= "red"
// VM2043:1 Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
//     at <anonymous>:1:29
// (anonymous) @ VM2043:1Understand this error
// myList[0].style.backgroundColor= "red"
// 'red'
// myList.forEach((li)=>{li.style.backgroundColor= "red"})
// undefined
// document.getElementsByClassName('list-item')
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
// const myNew =document.getElementsByClassName('list-item')
// undefined
// Array.from(myNew)
// (4) [li.list-item, li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-item3: li.list-itemlength: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// const convertedArr = Array.from(myNew)
// undefined
// convertedArr.forEach((li)=>{
//     li.style.color="red";
// })
// undefined
