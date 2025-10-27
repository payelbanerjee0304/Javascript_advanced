// ==============================My Process================================================
const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");
// document.body.style.backgroundColor = "red";
console.log(btn);
btn.forEach((btnVal) => {
  btnVal.addEventListener("click", (e) => {
    console.log(btnVal.getAttribute("id"));
    const colorbg = btnVal.getAttribute("id");
    console.log(colorbg);
    document.body.style.backgroundColor = colorbg;
  });
});
// ========================================Channel======================================
// btn.forEach((btnVal) => {
//   btnVal.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.target);
//     const colorbg = e.target.id;
//     console.log(colorbg);
//     document.body.style.backgroundColor = colorbg;
//   });
// });
