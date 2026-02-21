// get elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// function that returns a Promise (delay)
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async function
async function showMessage() {
  // get values
  const message = textInput.value;
  const delay = Number(delayInput.value);

  // clear previous output
  output.textContent = "";

  // wait for given delay
  await wait(delay);

  // display message
  output.textContent = message;
}

// button click event
button.addEventListener("click", showMessage);