// ! we will do BMI app
// ! to do this app we need
// ! first call the element we need
// ! make a function to calculate percentage

let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let btn = document.getElementById("btn");

btn.addEventListener("click", calc);

function calc() {
  let BMI = weight.value / ((height.value * height.value) / 10000);
  let health = document.getElementById("health");
  let result = document.getElementById("result");
  BMI = BMI.toFixed(2);

  if (BMI < 18) {
    health.textContent = `you're thin `;
  } else if (BMI >= 18 && BMI <= 24.9) {
    health.textContent = ` you're perfect`;
  } else if (BMI >= 25 && BMI <= 29.9) {
    health.textContent = `you're fat`;
  } else if (BMI >= 30 && BMI <= 34.9) {
    health.textContent = `you're very fat`;
  } else if (BMI >= 35 && BMI <= 39.9) {
    health.textContent = `your ass like a mountain`;
  } else if (BMI >= 40) {
    health.textContent = `go kill yourself `;
  }
  result.textContent = BMI;
  age.value = "";
  weight.value = "";
  height.value = "";
}
