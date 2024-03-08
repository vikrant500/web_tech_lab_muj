const countries = {
    India: "New Delhi",
    USA: "Washington D.C.",
    China: "Beijing",
    France: "Paris",
    Russia: "Moscow",
    Japan: "Tokyo"
  };
  
  const countrySelect = document.getElementById("country-select");
  const capitalOutput = document.getElementById("capital-output");
  
  countrySelect.addEventListener("change", function() {
    const selectedCountry = this.value;
    const capital = countries[selectedCountry];
  
    if (capital) {
      capitalOutput.textContent = `Capital of ${selectedCountry}: ${capital}`;
    } else {
      capitalOutput.textContent = "";
    }
  });
  