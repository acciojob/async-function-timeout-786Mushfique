//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
// const outputDiv = document.getElementById("output");

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}


async function showMessage() {
 
  const message = textInput.value;
  const delay = Number(delayInput.value);
  // outputDiv.textContent = "";

  await wait(delay);
  outputDiv.textContent = message;
}
button.addEventListener("click", showMessage);