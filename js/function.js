function parseAndValidate(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputValue = parseFloat(inputElement.value);

    return inputValue;
}
