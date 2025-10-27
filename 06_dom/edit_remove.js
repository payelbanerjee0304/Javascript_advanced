// ============================================Insert==========================================
const langAdd = (lang) => {
  const li = document.createElement("li");
  li.innerHTML = `${lang}`;
  document.querySelector(".language").appendChild(li);
};
langAdd("php");
const langOptiAdd = (lang) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(lang));
  document.querySelector(".language").appendChild(li);
};
langOptiAdd("python");
langOptiAdd("C++");

//========================================Edit======================================================
let secondLang = document.querySelector("li:nth-child(2)");
// secondLang.innerHTML = "Hi";
const li = document.createElement("li");
li.appendChild(document.createTextNode("hi"));

document.querySelector("li:nth-child(2)").replaceWith(li);
// console.log(secondLang);

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>Hello</li>";

//======================================Remove=========================================================

const lastLang = document.querySelector("li:last-child");
lastLang.remove();
