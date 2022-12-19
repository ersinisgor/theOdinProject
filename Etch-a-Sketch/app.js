const range = document.querySelector("#range");
const sizes = document.querySelectorAll(".size");

const changeSize = function (value) {
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].textContent = value;
  }
};

/* sizes.forEach((size) =>
  range.addEventListener("change", function (e) {
    size.innerHTML = e.target.value;
  })
); */

console.log(sizes, range);

range.oninput = function () {
  this.style.backgroundColor = "#0d1b2a";
};
