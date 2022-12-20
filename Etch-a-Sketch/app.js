const range = document.querySelector("#range");
const sizes = document.querySelectorAll(".size");
const tryBtn = document.querySelector("#try");
const container = document.querySelector("#container");

const footer = document.querySelector("footer");
const clear = document.querySelector("#clear");
const color = document.querySelector("#color");

//---RANGE--//
//it writes the size to the screen when the range changed with mouse
const changeSize = function (value) {
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].textContent = value;
  }
};

// create boxes and push it container
const createBoxes = function () {
  for (let i = 1; i <= `${range.value * range.value}`; i++) {
    const box = document.createElement("div");
    box.style.width = `calc((540px / ${range.value}) - 1px`;
    box.style.height = `calc((540px / ${range.value}) - 1px`;
    /*box.style.border = "1px solid black"; */
    container.appendChild(box);
    box.className = "boxes";
  }
};

createBoxes();

const boxes = document.querySelectorAll(".boxes");

const deleteBoxes = function () {
  container.innerHTML = "";
};

const paintColor = function () {
  /* this.classList.add("painted"); */
  this.style.backgroundColor = `${color.value}`;
};

const clearBoxes = function () {
  const boxes = document.querySelectorAll(".boxes");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "#ecdcb0";
  }
};

const changeButtonColor = function () {
  const colorButton = document.querySelector("#colorMode");
  colorButton.style.backgroundColor = `${color.value}`;
  range.style.accentColor = `${color.value}`;
};

color.addEventListener("input", changeButtonColor);

//deletes divs when the range changed
range.addEventListener("input", deleteBoxes);

clear.addEventListener("click", clearBoxes);

boxes.forEach((box) => {
  box.addEventListener("mouseover", paintColor);
});
