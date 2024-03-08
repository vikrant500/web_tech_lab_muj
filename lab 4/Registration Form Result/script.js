function reset_() {
    // Get the form element
    const form = document.querySelector("form");
  
    // Reset the form using the built-in method
    form.reset();
  }
  
function submitForm(event) {
  event.preventDefault(); // Prevent default form submission
  
  const form = document.querySelector("form");
  const formData = new FormData(form);
  
  // Process form data here (e.g., display in result container)
  const resultContainer = document.querySelector(".result-container");
  resultContainer.innerHTML = "<h3>Form Submitted!</h3>"; // Example output
  for (const [key, value] of formData.entries()) {
      resultContainer.innerHTML += `<p>${key}: ${value}</p>`;
  }
}
  
  // Attach the submitForm function to the form's submit event
const form = document.querySelector("form");
form.addEventListener("submit", submitForm);
  