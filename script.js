const button = document.querySelector("#btn");
const input = document.querySelector("#text");
const square = document.querySelector("#square");
const btn2 = document.querySelector("#e_btn");
const range = document.querySelector("#range");
const rangeSpan = document.querySelector("#range-span");
const circle = document.querySelector("#circle");

button.addEventListener("click", function () {
  if (input.value.length > 0) {
    square.style.backgroundColor = input.value;
    input.value = "";
  } else {
    alert("Please enter value");
  }
});

btn2.addEventListener("click", function () {
  btn2.style.display = "none";
});

range.addEventListener("input", function () {
  rangeSpan.textContent = range.value;
  circle.style.height = range.value + "%";
  circle.style.width = range.value + "%";
});
