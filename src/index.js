import { validatePostalCode, getAllCountries } from "postal-code-checker";
import { countryToAlpha2 } from "country-to-iso";

const form = document.querySelector("form");
const email = document.getElementById("mail");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");

// Set all elements to required so that form can use Contraint-Validation API
email.required = true;
country.required = true;
postalCode.required = true;
password.required = true;
confirmPassword.required = true;

//checks the validity of country regardless of passing regExp
//Written as a function so both country and postalCode can use.
const countriesAndCodes = getAllCountries();
function checkCountry() {
  const countryObj = countriesAndCodes.find((item) => {
    return item.countryName === country.value;
  });
  if (!countryObj) {
    return null;
  }
  return countryObj.countryCode;
}

email.addEventListener("input", () => {
  if (!email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address");
  } else {
    email.setCustomValidity("");
  }
  email.reportValidity();
});

country.addEventListener("input", () => {
  //regExp for min 4 characters with the first charater as capital
  //using element.pattern property means regExp needs to be a string
  country.pattern = "^([A-Z])(?=.*[a-zA-Z]).{4,}$";
  if (!country.validity.patternMismatch) {
    country.setCustomValidity("");
  } else {
    country.setCustomValidity(
      "A country name must start with a capital letter an must be at least 4 characters e.g 'Chad' ",
    );
  }
  //Checks if the country exists regardless of regExp pattern pass
  if (!checkCountry()) {
    country.setCustomValidity("Please enter a valid country");
  } else {
    country.setCustomValidity("");
  }
  country.reportValidity();
});

//using postal-code-checker and country-to-iso libraries for this
postalCode.addEventListener("input", () => {
  //Checks if the country exists before using library
  if (!checkCountry()) {
    postalCode.setCustomValidity("Please enter a valid country first");
    postalCode.reportValidity();
    return;
  } else {
    const isValidPostalCode = validatePostalCode(
      countryToAlpha2(country.value),
      postalCode.value,
    );
    if (!isValidPostalCode) {
      postalCode.setCustomValidity(
        `Please enter a postal code that is valid for  ${country.value}`,
      );
    } else {
      postalCode.setCustomValidity("");
    }
  }

  postalCode.reportValidity();
});

password.addEventListener("input", () => {
  //regExp for 1 capital letter, 1 number, 1 non-alphanumeric (special) character, min of 8 characters in total
  //using element.pattern property means regExp needs to be a string
  password.pattern = "^(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{8,}$";
  if (password.validity.patternMismatch) {
    password.setCustomValidity(
      "Your password must be a min of 8 characters and must include one of each uppercase, number and special character",
    );
  } else {
    password.setCustomValidity("");
  }
  password.reportValidity();
});

confirmPassword.addEventListener("input", () => {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("The password must match");
  } else {
    confirmPassword.setCustomValidity("");
  }
  confirmPassword.reportValidity();
});

form.addEventListener("submit", (event) => {
  // console.log({ email: email.validity });
  if (!form.checkValidity()) {
    event.preventDefault();
  } else {
    alert("High 5!!!");
  }
});
