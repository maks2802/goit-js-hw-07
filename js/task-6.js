const input = document.querySelector("input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

let sizes = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", destroyBoxes);

function createMarkup() {
  if (input.value < 1 || input.value > 100) {
    console.log("error");
    return;
  }

  boxesContainer.innerHTML = "";
  sizes = 30;
  createBoxes(input.value);
  input.value = '';
}

function createBoxes(amount) {
  let boxesHTML = "";
  for (let i = 0; i < amount; i++) {
    boxesHTML += `<div style="width: ${sizes}px; height: ${sizes}px; background-color: ${getRandomHexColor()};"></div>`;
    
    sizes += 10;
  }
  boxesContainer.innerHTML = boxesHTML;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  input.value = "";
  boxesContainer.innerHTML = "";
  sizes = 30;
}