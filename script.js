const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// delay function
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessage() {
  const message = textInput.value;
  const delay = parseInt(delayInput.value);

  // output must be empty immediately
  output.textContent = "";

  // exact wait
  await wait(delay);

  // set text immediately after delay
  output.textContent = message;
}

button.addEventListener("click", showMessage);