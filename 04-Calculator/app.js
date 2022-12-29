const nums = document.querySelectorAll(".nums");
const add = document.querySelector(".add");
const operator = document.querySelectorAll(".opts");
const result = document.querySelector(".result");
let output = "";

/* const getValue = function (e) {
   const input = e.textContent; 
   console.log(input); 
   e.target.id;
}; */

/* const showScreen = function () {
  output += this.id;
  result.textContent = output;
  output = Number(output);
  return output;
}; */

const showScreen = function (e) {
  output += e.target.id;
  result.textContent = output;
  console.log(output);
};

nums.forEach((num) => {
  num.addEventListener("click", showScreen);
});

/* const input = function (e) {
  Number(e.target.id);
}; */

/* nums.forEach((num) => {
  num.addEventListener("click", getValue);
}); */

/* Math Functions */
const addNumbers = function (num1, num2) {
  output = "";
  num1 = output;
  console.log("this is adding");
  console.log(num1 + num2);
  /* return num1 + num2; */
};

const subsNumbers = function (num1, num2) {
  return num1 - num2;
};

const divideNumbers = function (num1, num2) {
  return num1 / num2;
};

const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};

/* const operate = function (num1, num2, operator) {
    switch (operator) {
        case add:addNumbers(num1,num2)   
            break;
        case 
        default:
            break;
    }
}; */

const operate = function () {
  showScreen();
  const key = this.id;
  if (key === "divide") {
    divideNumbers(5, 10);
  } else if (key === "multiply") {
    multiplyNumbers(5, 10);
  } else if (key === "substract") {
    subsNumbers(output, 10);
  } else if (key === "add") {
    addNumbers(5, 10);
  }
};

operator.forEach((opt) => {
  opt.addEventListener("click", operate);
});

/* Try Add function */
/* add.addEventListener("click", addNumbers); */
