"use strict";
let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

const nums = document.querySelectorAll(".nums");
const opts = document.querySelectorAll(".opts");
const clear = document.querySelector(".clear");
const currentOperationScreen = document.querySelector(".current-operation");
const previousOperationScreen = document.querySelector(".previous-operation");

/* const buttons = document.querySelectorAll("button"); */

/* function getValue(num) {
  const value = num.textContent;
  output.push(value);
  let accumulativeOutput = output.join("");
  result.textContent = accumulativeOutput;
  accumulativeOutput = Number(accumulativeOutput);
  console.log(accumulativeOutput);
  return accumulativeOutput;
}

nums.forEach((num) => num.addEventListener("click", () => getValue(num)));

const addNumbers = function (num1, num2) {
  const result = num1 + num2;
  console.log("clicked");
  console.log(result);
  return result;
};
console.log(addNumbers(7, 9)); */
/* add.addEventListener("click", () => {
  addNumbers(5, 10);
}); */

//let output = "";
/*const subsNumbers = function (num1, num2) {
  return num1 - num2;
};

const divideNumbers = function (num1, num2) {
  return num1 / num2;
};

const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};

const operate = function (num1, num2, operator) {
  return num1 + operator + num2;
};

const aa = operate(2, 7, +);
console.log(aa); */

/* const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const subs = document.querySelector("#substract");
const add = document.querySelector("#add");
console.log(divide, multiply, subs, add); */
/* const nums = document.querySelectorAll(".nums");
const add = document.querySelector(".add");
const operator = document.querySelectorAll(".opts");
const result = document.querySelector(".result"); */
//let output = "";

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

/* const showScreen = function (e) {
  output += e.target.id;
  result.textContent = output;
};*/

/* const getValue = function () {
  output += this.value;
  //console.log(output); 
  result.textContent = output;

  return output;
};
let input = getValue();
console.log(input);

nums.forEach((num) => {
  num.addEventListener("click", getValue);
}); */

/* const input = function (e) {
  Number(e.target.id);
}; */

/* nums.forEach((num) => {
  num.addEventListener("click", getValue);
}); */

/* Math Functions */
/* const addNumbers = function (num1, num2) {
  //console.log(result.textContent);
  //output = "";
  //num1 = output;
  console.log(num1);
  console.log("this is adding");
  console.log(num1 + num2);
  return num1 + num2;
};

const subsNumbers = function (num1, num2) {
  return num1 - num2;
};

const divideNumbers = function (num1, num2) {
  return num1 / num2;
};

const multiplyNumbers = function (num1, num2) {
  return num1 * num2;
}; */

/* const operate = function (num1, num2, operator) {
    switch (operator) {
        case add:addNumbers(num1,num2)   
            break;
        case 
        default:
            break;
    }
}; */

/* const operate = function () {
  const num1 = Number(getValue());
  const key = this.id;
  if (key === "divide") {
    divideNumbers(5, 10);
  } else if (key === "multiply") {
    multiplyNumbers(5, 10);
  } else if (key === "substract") {
    subsNumbers(5, 10);
  } else if (key === "add") {
    addNumbers(num1, 10);
  }
};

operator.forEach((opt) => {
  opt.addEventListener("click", operate);
});
 */
/* Try Add function */
/* add.addEventListener("click", addNumbers); */
