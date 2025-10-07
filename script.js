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

//zad2

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

//zad3

const draggableElement = document.getElementById('ex3_element');
const containerOne = document.getElementById('ex3_one');
const containerTwo = document.getElementById('ex3_two');

let draggedElementId;

draggableElement.addEventListener('dragstart', (event) => {
  draggedElementId = event.target.id;
  event.dataTransfer.setData('text/plain', draggedElementId);
});

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();

  const data = event.dataTransfer.getData('text/plain');
  const elementToMove = document.getElementById(data);

  event.currentTarget.appendChild(elementToMove);
}


[containerOne, containerTwo].forEach(container => {
  container.addEventListener('dragover', handleDragOver);
  container.addEventListener('drop', handleDrop);
});

// containerTwo.addEventListener('dragover', handleDragOver);
// containerTwo.addEventListener('drop', handleDrop);
