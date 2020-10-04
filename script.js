var options = document.querySelectorAll(".option");
console.log(options);
options.forEach((option) => option.addEventListener("click", calculations));

var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var flag = true;
function calculations() {
  //   var operator = eval(this.dataset.value);
  var value = this.getAttribute("data-value");
  if (value == "+") {
    operator = "+";
    operand1 = parseFloat(display.innerText);
    display.innerText = "";
  } else if (value == "*") {
    operator = "*";
    operand1 = parseFloat(display.innerText);
    display.innerText = "";
  } else if (value == "-") {
    operator = "-";
    operand1 = parseFloat(display.innerText);
    display.innerText = "";
  } else if (value == "/") {
    operator = "/";
    operand1 = parseFloat(display.innerText);
    display.innerText = "";
  } else if (value == "%") {
    operator = "%";
    operand1 = parseFloat(display.innerText);
    display.innerText = "";
  } else if (value == "=") {
    operand2 = parseFloat(display.innerText);
    let ans;
    switch (operator) {
      case "+":
        ans = eval("operand1 + operand2");
        break;
      case "*":
        ans = eval("operand1 * operand2");
        break;
      case "-":
        ans = eval("operand1 - operand2");
        break;
      case "/":
        if (operand2 == 0) {
          ans = "ERROR";
        } else {
          ans = eval("operand1 / operand2");
        }
        break;
      case "%":
        if (operand2 == 0) {
          ans = "ERROR";
        } else {
          ans = eval("operand1 / operand2");
        }
        break;
    }
    display.innerText = "";
    setTimeout(() => {
      display.innerText = ans;
    }, 300);
  } else if (value == "AC") {
    display.innerText = "";
    operand1 = 0;
    operand2 = null;
    operator = null;
  } else if (value == "+/-") {
    var cur = parseFloat(display.innerText);
    if (!flag) {
      display.innerText = -cur;
      flag = true;
    } else {
      display.innerText = cur;
      flag = false;
    }
  } else {
    display.innerText += value;
  }

  //   else {
  //     display.innerText += value;
  //   }
}
