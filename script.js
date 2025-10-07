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
  setTimeout(() => {
    event.target.style.opacity = '0.5';
  }, 0);
});

draggableElement.addEventListener('dragend', (event) => {
  event.target.style.opacity = '1';
});

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();

  event.currentTarget.classList.remove('hovered');

  const data = event.dataTransfer.getData('text/plain');
  const elementToMove = document.getElementById(data);

  event.currentTarget.appendChild(elementToMove);
}

function handleDragEnter(event) {

  if (event.currentTarget.id.startsWith('ex3_')) {
    event.currentTarget.classList.add('hovered');
  }
}

function handleDragLeave(event) {
  event.currentTarget.classList.remove('hovered');
}


// [containerOne, containerTwo].forEach(container => {
//   container.addEventListener('dragover', handleDragOver);
//   container.addEventListener('drop', handleDrop);
//   container.addEventListener('dragenter', handleDragEnter);
//   container.addEventListener('dragleave', handleDragLeave);
// });

containerTwo.addEventListener('dragover', handleDragOver);
containerTwo.addEventListener('drop', handleDrop);
containerTwo.addEventListener('dragenter', handleDragEnter);
containerTwo.addEventListener('dragleave', handleDragLeave);
