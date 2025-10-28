// =======================================My Process============================================

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calBtn = document.querySelector("#calculate");
const results = document.querySelector("#results");
const category = document.querySelector("#category");
const reset = document.querySelector("#reset");
// console.log(calBtn);
calBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(height.value);
  // console.log(weight.value);
  results.append(`Your BMI is ${calculation(height.value, weight.value)}`);
  reset.style.removeProperty("display");
  calBtn.setAttribute("hidden", true);
});

const calculation = (ht, wt) => {
  const heightInMeter = ht / 100;
  const res = wt / heightInMeter ** 2;
  resultType(res);
  return res.toFixed(1);
};
const resultType = (res) => {
  if (res <= 18.5) {
    category.append("Under-weight");
  } else if (res > 18.5 && res <= 24.9) {
    category.append("Normal");
  } else if (res > 25 && res <= 29.9) {
    category.append("Over-Weight");
  } else if (res > 30) {
    category.append("Obesity");
  } else {
    category.append("Wrong Input");
  }
};

reset.addEventListener("click", () => {
  window.location.reload();
});

// =======================================Channel===================================================
// const form = document.querySelector("form");
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector("#height").value);
//   const weight = parseInt(document.querySelector("#weight").value);
//   const results = document.querySelector("#results");

//   if (height === "" || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === "" || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });
