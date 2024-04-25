// Function to collect form data and redirect to result page
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    var formData = {
        name: document.getElementById('name').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        dob: document.getElementById('day').value + '-' + document.getElementById('month').value + '-' + document.getElementById('year').value,
        languages: [],
        address: document.getElementById('address').value
    };

    // Collect checked languages
    var languagesCheckboxes = document.getElementsByName('languages');
    for (var i = 0; i < languagesCheckboxes.length; i++) {
        if (languagesCheckboxes[i].checked) {
            formData.languages.push(languagesCheckboxes[i].value);
        }
    }

    // Convert form data to JSON string
    var formDataJSON = JSON.stringify(formData);

    // Store form data in session storage
    sessionStorage.setItem('formData', formDataJSON);

    // Redirect to result page
    window.location.href = 'result.html';
});

// Function to reset form
function resetForm() {
    document.getElementById('registration-form').reset();
}
