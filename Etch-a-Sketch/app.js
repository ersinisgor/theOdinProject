const range = document.querySelector("#range");
const sizes = document.querySelectorAll(".size");
const tryBtn = document.querySelector("#try");
const container = document.querySelector("#container");
const boxes = document.querySelectorAll(".boxes");

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

const deleteBoxes = function () {
  container.innerHTML = "";
};

//deletes divs when the range changed
range.addEventListener("input", deleteBoxes);

//shows for default color on color palette
range.oninput = function () {
  this.style.backgroundColor = "#0d1b2a";
};
