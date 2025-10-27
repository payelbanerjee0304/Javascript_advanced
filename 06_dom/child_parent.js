let parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1]); //<div class="day">Tuesday</div>
// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML); //Monday Tuesday Wednesday Thursday
// }
parent.children[1].style.color = "orange";
// console.log(parent.firstElementChild); //<div class="day">Monday</div>
// console.log(parent.lastElementChild); //<div class="day">Thursday</div>
const dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement); //<div class="parent"><!-- this is a comment --><div class="day">Monday</div><div class="day" style="color: orange;">Tuesday</div><div class="day">Wednesday</div><div class="day">Thursday</div></div>
console.log(dayOne.nextElementSibling); //<div class="day" style="color: orange;">Tuesday</div>
console.log(parent.childNodes); //<div class="day" style="color: orange;">Tuesday</div>
