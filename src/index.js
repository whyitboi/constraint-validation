const form = document.querySelector("form");
const email = document.getElementById("mail");
const country = document.getElementById("country");
const countryPattern = /^[A-Z][a-zA-Z]{3,}$/;
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");
// const passwordPattern = /^[a-zA-Z]${8}/

email.addEventListener("input", () => {
  if (email.validity.valid) {
    email.setCustomValidity("");
  } else {
    setCustomValidity("Please enter a valid email address");
  }
});

country.addEventListener("input", () => {
  if (countryPattern.test(country.value)) {
    country.setCustomValidity("");
  } else {
    country.setCustomValidity(
      "A country name must start with a capital letter an must be at least 4 characters e.g 'Chad' ",
    );
  }
});
