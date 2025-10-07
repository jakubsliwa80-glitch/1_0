const button = document.getElementById("ex1_button");
const contentContainer = document.getElementById("ex1_content");

function generateAndDisplayDigits() {
  let digits = [];

  for (let i = 0; i < 10; i++) {
    digits.push(i);
  }

  const digitsToBeDisplayed = digits.join(", ");

  contentContainer.innerHTML = digitsToBeDisplayed;
}

button.addEventListener("click", generateAndDisplayDigits);
