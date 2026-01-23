let a = "";
let b = "";
let choice = 0;

function updateDisplay() {
  if (choice === 0) {
    result.value = a;
  } else {
    result.value = a + getOperatorSymbol(choice) + b;
  }
}

function getOperatorSymbol(choice) {
  if (choice === 1) return "/";
  if (choice === 2) return "*";
  if (choice === 3) return "-";
  if (choice === 4) return "+";
  return "";
}

const result = document.getElementById("result");

document.getElementById("clear").addEventListener("click", function () {
  a = "";
  b = "";
  choice = 0;
  result.value = "";
});

document.getElementById("divide").addEventListener("click", function () {
  if (a !== "") choice = 1;
  updateDisplay();
});
document.getElementById("multiply").addEventListener("click", function () {
  if (a !== "") choice = 2;
  updateDisplay();
});
document.getElementById("subtraction").addEventListener("click", function () {
  if (a !== "") choice = 3;
  updateDisplay();
});
document.getElementById("add").addEventListener("click", function () {
  if (a !== "") choice = 4;
  updateDisplay();
});

// Digits
document.getElementById("zero").addEventListener("click", function () {
  if (choice === 0) a += "0";
  else b += "0";
  updateDisplay();
});
document.getElementById("one").addEventListener("click", function () {
  if (choice === 0) a += "1";
  else b += "1";
  updateDisplay();
});
document.getElementById("two").addEventListener("click", function () {
  if (choice === 0) a += "2";
  else b += "2";
  updateDisplay();
});
document.getElementById("three").addEventListener("click", function () {
  if (choice === 0) a += "3";
  else b += "3";
  updateDisplay();
});
document.getElementById("four").addEventListener("click", function () {
  if (choice === 0) a += "4";
  else b += "4";
  updateDisplay();
});
document.getElementById("five").addEventListener("click", function () {
  if (choice === 0) a += "5";
  else b += "5";
  updateDisplay();
});
document.getElementById("six").addEventListener("click", function () {
  if (choice === 0) a += "6";
  else b += "6";
  updateDisplay();
});
document.getElementById("seven").addEventListener("click", function () {
  if (choice === 0) a += "7";
  else b += "7";
  updateDisplay();
});
document.getElementById("eight").addEventListener("click", function () {
  if (choice === 0) a += "8";
  else b += "8";
  updateDisplay();
});
document.getElementById("nine").addEventListener("click", function () {
  if (choice === 0) a += "9";
  else b += "9";
  updateDisplay();
});
document.getElementById("dot").addEventListener("click", function () {
  if (choice === 0 && !a.includes(".")) a += ".";
  else if (choice !== 0 && !b.includes(".")) b += ".";
  updateDisplay();
});

document.getElementById("equal").addEventListener("click", function () {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);
  let res = "";

  switch (choice) {
    case 1:
      res =  num1 / num2;
      break;
    case 2:
      res = num1 * num2;
      break;
    case 3:
      res = num1 - num2;
      break;
    case 4:
      res = num1 + num2;
      break;
    default:
      res = "Invalid";
  }

  result.value = res;
  a = res.toString();
  b = "";
  choice = 0;
});
