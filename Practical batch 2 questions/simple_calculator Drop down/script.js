// Function to perform calculation based on selected operator
function calculate() {
    // Get input values and selected operator
    var num1 = parseFloat(document.getElementById('num_1').value);
    var num2 = parseFloat(document.getElementById('num_2').value);
    var operator = document.getElementById('country-select').value;
    var result = 0;

    // Perform calculation based on operator
    switch(operator) {
        case 'Add':
            result = num1 + num2;
            break;
        case 'Sub':
            result = num1 - num2;
            break;
        case 'Mult':
            result = num1 * num2;
            break;
        case 'Div':
            if(num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Cannot divide by zero!");
                return;
            }
            break;
        default:
            alert("Please select an operator.");
            return;
    }

    // Display result
    document.getElementById('res').value = result;
}

// Function to reset the calculator
function reset_() {
    document.getElementById('num_1').value = '';
    document.getElementById('num_2').value = '';
    document.getElementById('country-select').selectedIndex = 0;
    document.getElementById('res').value = '';
}

// Add event listener to the select element to trigger calculation on change
document.getElementById('country-select').addEventListener('change', calculate);
