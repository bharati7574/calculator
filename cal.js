const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = this.value;
    let displayValue = display.value;
    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      display.value = eval(displayValue);
    } else {
      display.value += value;
    }
  });
});
