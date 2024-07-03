let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let selectedColorHexCodeElement = document.getElementById("selectedColorHexCode");

function changeBgToGreyAndUpdateText() {
    colorPickerContainerElement.style.backgroundColor = "#e0e0e0";
    selectedColorHexCodeElement.textContent = "#e0e0e0";
    selectedColorHexCodeElement.style.color = "#56ccf2";

}

function changeBgToGreenAndUpdateText() {
    colorPickerContainerElement.style.backgroundColor = "#6fcf97";
    selectedColorHexCodeElement.textContent = "#6fcf97";
    selectedColorHexCodeElement.style.color = "#56ccf2";
}

function changeBgToBlueAndUpdateText() {
    colorPickerContainerElement.style.backgroundColor = "#56ccf2";
    selectedColorHexCodeElement.textContent = "#56ccf2";
    selectedColorHexCodeElement.style.color = "#56ccf2";
}

function changeBgToPurpleAndUpdateText() {
    colorPickerContainerElement.style.backgroundColor = "#bb6bd9";
    selectedColorHexCodeElement.textContent = "#bb6bd9";
    selectedColorHexCodeElement.style.color = "#56ccf2";

}