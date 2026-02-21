const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// promise based timeout
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

button.addEventListener("click", async (e) => {

  e.preventDefault();

  const message = textInput.value;
  const delay = parseInt(delayInput.value, 10); 

  
  outputDiv.textContent = "";


  await wait(delay);


  outputDiv.textContent = message;
});