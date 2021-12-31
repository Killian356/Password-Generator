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
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Random Function

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  symbol: getRandomSymbol,
  number: getRandomNumber
};

// Generate Passwword

function generatePassword(lower, upper, symbol, number,  length) {
  var validCharacters = ""
  if(lower) {
    validCharacters += getRandomLower()
  }
  if(upper) {
    validCharacters += getRandomUpper()
  }
  if(symbol) {
    validCharacters += getRandomSymbol()
  }
  if(number) {
    validCharacters += getRandomNumber()
  }

  console.log(validCharacters)
  let generatedPassword = '';

// Creating loop

for (let i = 0; i < length; i ++) {

  var randomIndex = Math.floor(Math.random() * validCharacters.length)
  var randomCharacter = validCharacters[randomIndex];
  generatedPassword += randomCharacter
}

return generatedPassword;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
