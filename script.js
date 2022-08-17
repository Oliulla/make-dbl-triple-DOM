function getInputFieldValue(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';

    return inputFieldValue;
    // makeDouble(inputFieldValue);
    // makeTriple(inputFieldValue)
}

function makeDouble(inputValue){
    const valueDouble = inputValue * 2;
    setValueToResult(valueDouble);
}

function makeTriple(inputValue){
    const valueTriple = inputValue * 3;
    setValueToResult(valueTriple);
}

function setValueToResult(value){
    const getResultTextElement = document.getElementById('result');
    const fixedValue = value.toFixed(1);
    getResultTextElement.innerText = fixedValue;
}

document.getElementById('make-double').addEventListener('click', () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    
    if (isNaN(parseFloat(inputFieldValue)) === true){
        alert('Please enter a number');
        inputField.value = '';
        return;
    }

    // if (typeof(inputFieldValue) !== 'number'){
    //     alert('Please enter a number');
    //     return;
    // }
    
    const value = getInputFieldValue("input-field");

    // if(isNaN(value) === true) {
    //     alert('Please enter a number');
    //     return;
    // }

    makeDouble(value);
})

document.getElementById('make-triple').addEventListener('click', () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    if (isNaN(parseFloat(inputFieldValue)) === true){
        alert('Please enter a number');
        inputField.value = '';
        return;
    }
    const value = getInputFieldValue("input-field");
    makeTriple(value);
})