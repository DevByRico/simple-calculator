const display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Enable keyboard support for the calculator
document.addEventListener('keydown', function (event) {
  const key = event.key;

  // Append numbers, dot, and operators to the display
  if (
    (key >= '0' && key <= '9') ||
    key === '.' ||
    key === '+' ||
    key === '-' ||
    key === '*' ||
    key === '/'
  ) {
    appendToDisplay(key);
  }
  // Call calculate() when Enter is pressed
  else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  }
  // Clear display when Escape is pressed
  else if (key === 'Escape') {
    clearDisplay();
  }
});
