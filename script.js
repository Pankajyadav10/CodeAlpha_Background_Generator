// Get elements from the DOM
const colorPicker = document.getElementById('colorPicker');
const setBackgroundButton = document.getElementById('setBackground');

// Function to set the background color
function setBackgroundColor() {
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
}

// Event listener for the "Set Background" button
setBackgroundButton.addEventListener('click', setBackgroundColor);
