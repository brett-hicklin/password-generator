// Assignment Code
// goes to HTML doc and finds the generate ID inside of button
var generateBtn = document.querySelector("#generate");

var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var symbols = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// this function initializes the prompts on the screen to take user input for password type and length.
// it also collects that information into an object that is used in the generatePassword function
function startPrompt() {
  var selectAmountCharacters = prompt(
    "How many characters would you like to have in your password? Please select between 8 through 128 characters"
  );

  if (selectAmountCharacters < 8 || selectAmountCharacters > 128) {
    alert("Please select between 8 and 128 characters only");
    return;
  }

  var selectLowercase = confirm(
    "Click 'OK' to confirm lowercase characters in your password"
  );
  var selectUppercase = confirm(
    "Click 'OK' to confirm uppercase characters in your password"
  );
  var selectNumbers = confirm(
    "Click 'OK' to confirm numeric characters in your password"
  );
  var selectSpecialCharacters = confirm(
    "Click 'OK' to confirm special characters in your password"
  );
  var requirements = [];

  if (selectLowercase) {
    requirements.push("lowercase");
  }
  if (selectUppercase) {
    requirements.push("uppercase");
  }
  if (selectNumbers) {
    requirements.push("numeric");
  }
  if (selectSpecialCharacters) {
    requirements.push("specialChar");
  } 
  if (requirements.length < 1){
    alert("You must select at least one character requirement!");
  }

  /* creates an object that holds the boolean results of character types, and the
              results of the character length*/
  return {
    requirements: requirements,
    passwordLength: selectAmountCharacters,
  };
}
//gets a random number to help randomize the generation of the password characters
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// takes the input from startPrompt, and the random integer from getRandomInt to create a random password based on users input
function generatePassword() {
  var passwordRequirementsCompleted = [];

  var promptResults = startPrompt();
  if (promptResults === undefined) {
    return;
  }
  var passwordRequirementsGiven = promptResults.requirements;
  var passwordString = "";

  for (let i = 0; i < promptResults.passwordLength; i++) {
    var passwordReqIndex = getRandomInt(passwordRequirementsGiven.length);

    if (passwordRequirementsGiven[passwordReqIndex] === "lowercase") {
      passwordRequirementsCompleted.push("lowercase");
      var lowercaseIndex = getRandomInt(alphabet.length);
      passwordString = passwordString + alphabet[lowercaseIndex];
    } else if (passwordRequirementsGiven[passwordReqIndex] === "uppercase") {
      passwordRequirementsCompleted.push("uppercase");
      var uppercaseIndex = getRandomInt(alphabet.length);
      passwordString = passwordString + alphabet[uppercaseIndex].toUpperCase();
    } else if (passwordRequirementsGiven[passwordReqIndex] === "numeric") {
      passwordRequirementsCompleted.push("numeric");
      var number = getRandomInt(10);
      passwordString = passwordString + number;
    } else if (passwordRequirementsGiven[passwordReqIndex] === "specialChar") {
      passwordRequirementsCompleted.push("specialChar");
      var specialCharIndex = getRandomInt(symbols.length);
      passwordString = passwordString + symbols[specialCharIndex];
    }

    // run console.log(passwordString) to see how password string is created/iterated
  }
  for (let i = 0; i < passwordRequirementsGiven.length; i++) {
    if (!passwordRequirementsCompleted.includes(passwordRequirementsGiven[i])) {
      return generatePassword();
    }
  }

  return passwordString;
}

// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();
  if (password === undefined) {
    return;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


