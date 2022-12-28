const nums = document.querySelectorAll(".nums");
let output = "";

/* const getValue = function (e) {
   const input = e.textContent; 
   console.log(input); 
   e.target.id;
}; */

const showScreen = function () {
  const result = document.querySelector(".result");
  output += this.id;
  result.textContent = output;
  return output;
};

/* const input = function (e) {
  Number(e.target.id);
}; */

/* nums.forEach((num) => {
  num.addEventListener("click", getValue);
}); */

nums.forEach((num) => {
  num.addEventListener("click", showScreen);
});

/* Math Functions */
const add = function (a, b) {
  return a + b;
};

const subs = function (a, b) {
  return a - b;
};

const divide = function (a, b) {
  return a / b;
};

const multiply = function (a, b) {
  return a * b;
};

const operate = function (a, b, operator) {};
