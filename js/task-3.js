const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", updateName);

function updateName() {
    const inputValue = inputName.value.trim();
    if (inputValue.textContent === "") {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = inputValue;
    }
}