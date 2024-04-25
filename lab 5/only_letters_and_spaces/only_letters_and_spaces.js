function containsOnlyLettersAndSpaces(input) {
    // Regular expression to match only letters (uppercase or lowercase) and spaces
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(input);
}

// Example usage:
const input1 = "Hello World"; // Contains only letters and spaces
const input2 = "123abc"; // Contains digits
const input3 = "Hello123"; // Contains digits and letters

console.log(containsOnlyLettersAndSpaces(input1)); // Output: true
console.log(containsOnlyLettersAndSpaces(input2)); // Output: false
console.log(containsOnlyLettersAndSpaces(input3)); // Output: false