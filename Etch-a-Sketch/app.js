/* const tryBtn = document.querySelector("#try"); */
const range = document.querySelector("#range");
const color = document.querySelector("#color");
const clear = document.querySelector("#clear");
const selected = document.querySelector(".selected");
const rainbowMode = document.querySelector("#rainbowMode");
const colorMode = document.querySelector("#colorMode");

// Color Mode
const selectColorMode = function () {
  rainbowMode.classList.remove("selected");
  colorMode.classList.add("selected");
};
colorMode.addEventListener("click", selectColorMode);

const changeButtonColor = function () {
  const colorButton = document.querySelector("#colorMode");
  const headerColor = document.querySelector("header");

  colorButton.style.backgroundColor = `${color.value}`;
  range.style.accentColor = `${color.value}`;
  headerColor.style.color = `${color.value}`;
};
if (colorMode.className === "selected") {
  color.addEventListener("input", changeButtonColor);
}

// Rainbow Mode
const rainbow = function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const hexColor = `#${randomColor}`;
  return hexColor;
};

//select for paint rainbow
const selectRainbowMode = function () {
  colorMode.classList.remove("selected");
  rainbowMode.classList.add("selected");
};
rainbowMode.addEventListener("click", selectRainbowMode);

// clear all area
const clearBoxes = function () {
  const boxes = document.querySelectorAll(".boxes");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "#ecdcb0";
  }
};
clear.addEventListener("click", clearBoxes);

// remove borders
/* const removeBorders = function () {
  const boxes = document.querySelectorAll(".boxes");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].removeAttribute("border-bottom");
    boxes[i].removeAttribute("border-right");
    boxes[i].style.width = `calc((540px / ${range.value})`;
    boxes[i].style.height = `calc((540px / ${range.value})`;
  }
};
tryBtn.addEventListener("click", removeBorders); */

// it writes the size to the screen when the range changed with mouse
const changeSize = function () {
  const sizes = document.querySelectorAll(".size");
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].textContent = range.value;
  }
};
range.addEventListener("input", changeSize);

// delete first boxes when the range changed
const deleteBoxes = function () {
  const boxes = document.querySelectorAll(".boxes");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].remove("div");
  }
};
range.addEventListener("input", deleteBoxes);

//painting boxes
const paintColor = function () {
  if (colorMode.className === "selected") {
    this.style.backgroundColor = `${color.value}`;
  } else if (rainbowMode.className === "selected") {
    this.style.backgroundColor = `${rainbow()}`;
  }
};

// creating boxes
const createBoxes = function () {
  for (let i = 1; i <= `${range.value * range.value}`; i++) {
    const box = document.createElement("div");
    box.style.width = `calc((540px / ${range.value}) - 1px`;
    box.style.height = `calc((540px / ${range.value}) - 1px`;
    container.appendChild(box);
    box.className = "boxes";
  }

  const boxes = document.querySelectorAll(".boxes");
  boxes.forEach((box) => {
    box.addEventListener("mouseenter", paintColor);
  });
};
createBoxes();
range.addEventListener("change", createBoxes);

/* const createBoxes = function () {
  for (let i = 1; i <= `${range.value * range.value}`; i++) {
    const box = document.createElement("div");
    box.style.width = `calc((540px / ${range.value})`;
    box.style.height = `calc((540px / ${range.value})`;
    container.appendChild(box);
    box.className = "boxes";
  }

  const boxes = document.querySelectorAll(".boxes");
  boxes.forEach((box) => {
    box.addEventListener("mouseenter", paintColor);
  });
};
createBoxes();
range.addEventListener("change", createBoxes); */

//------------------OLD SCRIPT-------------------//
/* const tryBtn = document.querySelector("#try"); 
const container = document.querySelector("#container");
const clear = document.querySelector("#clear");
const color = document.querySelector("#color");

//---RANGE--//
//it writes the size to the screen when the range changed with mouse
const changeSize = function (value) {
  const sizes = document.querySelectorAll(".size");
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].textContent = value;
  }
};

// create boxes and push it container
const createBoxes = function () {
  const range = document.querySelector("#range");
  for (let i = 1; i <= `${range.value * range.value}`; i++) {
    const box = document.createElement("div");
    box.style.width = `calc((540px / ${range.value}) - 1px`;
    box.style.height = `calc((540px / ${range.value}) - 1px`;
    box.style.border = "1px solid black"; 
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
   this.classList.add("painted"); 
   this.style.backgroundColor = `${color.value}`; 
  console.log(this);
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

// same function //
container.childNodes.forEach((box) => {
  box.addEventListener("mouseenter", paintColor);
});
/* boxes.forEach((box) => {
  box.addEventListener("mouseenter", paintColor);
}); */
