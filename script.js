const button = document.getElementById("ex1_button");
const contentContainer = document.getElementById("ex1_content");
const textField = document.getElementById("ex2_text");
const validationOutput = document.getElementById("ex2_content");

function generateAndDisplayDigits() {
  let digits = [];

  for (let i = 0; i < 10; i++) {
    digits.push(i);
  }

  const digitsToBeDisplayed = digits.join(", ");

  contentContainer.innerHTML = digitsToBeDisplayed;
}

button.addEventListener("click", generateAndDisplayDigits);

function validatePhoneNumber() {
  
  const text = textField.value.trim();
  const len = text.length;

  
  validationOutput.textContent = "";

  
  if (len !== 9) {
    validationOutput.textContent = "Długość numeru musi być równa 9";
    validationOutput.style.color = "orange";
    return; 
  }
  
  const containsLetters = /[a-zA-Z]/.test(text);
  if (containsLetters) {
    validationOutput.textContent = "Numer nie może zawierać liter";
    validationOutput.style.color = "red";
    return;
  }

  
  const containsSpecialChars = /[^0-9]/.test(text);
  if (containsSpecialChars) {
    validationOutput.textContent = "Numer nie może zawierać znaków specjalnych";
    validationOutput.style.color = "red";
    return;
  }

  
  validationOutput.textContent = "Numer telefonu jest poprawny";
  validationOutput.style.color = "green";
}


textField.addEventListener("input", validatePhoneNumber);
