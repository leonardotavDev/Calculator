const input = document.querySelector(".display");

function addNumber(number) {
  const valueInput = input.value;
  input.value = valueInput + number;
}

function clearInput() {
  input.value = "";
}

function calculated() {
  const valueInput = input.value;

  input.value = eval(valueInput);
}

function addAndSub() {
  const valueInput = input.value;

  input.value = valueInput * -1;
}
