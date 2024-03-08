function Factorial_and_mult_table() {
    // Prompt the user for a number
    const num = parseInt(prompt("Enter a number to calculate its factorial:"));
  
    // Check for valid input
    if (Number.isInteger(num) && num >= 0) {
      // Calculate the factorial
      let factorial = 1;
      for (let i = 1; i <= num; i++) {
        factorial *= i;
      }
  
      // Display the factorial using alert
      alert(`The factorial of ${num} is ${factorial}`);
  
      // Calculate and display the multiplication table
      let table = "";
      for (let i = 1; i <= 10; i++) {
        table += `${num} x ${i} = ${num * i}\n`;
      }
      alert(`Multiplication Table of ${num}:\n${table}`);
    } else {
      alert("Please enter a positive integer.");
    }
  }
  
  // Call the function on page load
  window.onload = Factorial_and_mult_table;
  