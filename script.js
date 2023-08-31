let currentResult = "";

function appendCharacter(char) {
  currentResult += char;
  updateResult();
}

function deleteLastChar() {
  currentResult = currentResult.slice(0, -1);
  updateResult();
}

function clearResult() {
  currentResult = "";
  updateResult();
}

function calculateResult() {
  try {
    const result = eval(currentResult);
    currentResult = result.toString();
    updateResult();
  } catch (error) {
    currentResult = "Error";
    updateResult();
  }
}

function updateResult() {
  document.getElementById("result").value = currentResult;
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
}
