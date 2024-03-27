function performOperation() {
    // get the user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // check if inputs are valid numbers
    if(!isNaN(num1) && !isNaN(num2)) {
        let result  = multiply(num1, num2);
        // display the result
        displayResult(result);
    } else {
        displayResult("Please enter valid numbers");
    }
}

function multiply(a,b) {
    // introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function displayResult(result) {
    // display the result in the paragraph element
    const resultEle = document.getElementById("result");
    resultEle.textContent = `The result is ${result}`;

}