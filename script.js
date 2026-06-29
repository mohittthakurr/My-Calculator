// Screen variable to access display input
let display = document.getElementById('display');

// Function to add numbers/operators to screen
function appendValue(val) {
    display.value += val;
}

// Function to clear everything (C button)
function clearDisplay() {
    display.value = '';
}

// Function to delete single last character (Del button)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate final mathematics logic (= button)
function calculateResult() {
    try {
        // eval function evaluates the string expression
        if(display.value !== "") {
            display.value = eval(display.value);
        }
    } 
    catch (error) {
        display.value = 'Error';
    }
}
