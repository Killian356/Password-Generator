// Get references to the #generate element

// Password Chararistics

var generateBtn = document.querySelector("#generate");
var passlength, cuppercase, clowercase, csymbols, cnumbers;
function askQuestions() {

  while (passlength < 8 || passlength > 128) {
    passlength = prompt("Length must be 8-128 characters");
  }
  passlength= prompt("How many characters would you like your password to be?");
  cuppercase = confirm("Would you like to use uppercase letters?");
  clowercase = confirm("Would you like to use lowercase letters?");
  cnumbers = confirm("would you like to use numbers?");
  csymbols = confirm("would you like to use special characters?");

  while (!(cuppercase || clowercase || cnumbers || csymbols)) {
    alert("You must select at least one character type!");

    cuppercase = confirm("Would you like to use uppercase letters?");
    clowercase = confirm("Would you like to use lowercase letters?");
    csymbols = confirm("would you like to use special characters?");
    cnumbers = confirm("would you like to use numbers?");

  }
}

// Write Passwoard

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  symbol: getRandomSymbol,
  number: getRandomNumber
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
