// Variables for character type sets
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', ']', '{', '}', '|', ';', ':', '<', '>', '?', '/', '.', ',', "'", '"'];
var combinedChars = [lowercase.concat(uppercase).concat(numbers).concat(specialCharacters)];


// Assignment Code
var generateBtn = document.querySelector("#generate");

function getUserInput() {
  var amount = parseInt(prompt('Please provide an amount of characters between 8 and 128'));
  var includeLowercase = confirm('Would you like to include lowercase letters?');
  var includeUppercase = confirm('Would you like to include uppercase letters?');
  var includeNumbers = confirm('Would you like to include numbers?');
  var includeSpecial = confirm('Would you like to include special characters?');
  console.log(amount, includeLowercase, includeUppercase, includeNumbers, includeSpecial);
  return [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecial];
}

function generatePassword(){
  var choices = getUserInput();
  var pass = '';
  var combinedChars = [];
  
    var includeLowercase = choices[1];
    var includeUppercase = choices[2];
    var includeNumbers = choices[3];
    var includeSpecial = choices[4];

    if (includeLowercase === true) {
        combinedChars = combinedChars.concat(lowercase)
    }
    if (includeUppercase) {
        combinedChars = combinedChars.concat(uppercase)
    }
    if (includeNumbers) {
        combinedChars = combinedChars.concat(numbers)
    }
    if (includeSpecial) {
        combinedChars = combinedChars.concat(specialCharacters)
    }

    for (count = 0; count < choices[0]; count++) {
        var randomIndex = Math.floor(Math.random() * combinedChars.length);
        randomChar = combinedChars[randomIndex];
        pass += randomChar;
    }
    return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// When the user clicks the generateBtn the function writePassword will fire
generateBtn.addEventListener("click", writePassword);
