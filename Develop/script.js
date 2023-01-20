// Assignment Code
// goes to HTML doc and finds the generate ID inside of button
var generateBtn = document.querySelector("#generate");
var alphabet = ['a', 'b', 'c', 'd' ,'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var symbols = ['!','"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
var startPrompt = prompt("How many characters would you like to have in your password? Please select between 8 through 128 characters")
var selectLowercase = prompt("Click 'OK' to confirm lowercase characters in your password")
var selectUppercase = prompt("Click 'OK' to confirm uppercase characters in your password")
var selectNumbers = prompt("Click 'OK' to confirm numeric characters in your password")
var selectSpecialCharacters = prompt("Click 'OK' to confirm special characters in your password")

// collects the data from which character requirements will be used for password, returns as array.
function getpasswordRequirementsGiven(){
  var isLowercase = true;
  var isUppercase = true;
  var isNumeric = true;
  var isSpecialChar = true;
  var requirements = []
  if (isLowercase){
    requirements.push('lowercase')
  }
  if (isUppercase){
    requirements.push('uppercase')
  }
  if (isNumeric){
    requirements.push('numeric')
  }
  if (isSpecialChar){
    requirements.push('specialChar')
  }
  return requirements;
}  

function getRandomInt(max){
  return Math.floor(Math.random()* max);
}


function generatePassword(){
  var passwordLength = 8;
  var passwordRequirementsCompleted = [];
  
  var passwordRequirementsGiven = getpasswordRequirementsGiven();
  // var passwordRequirementsGiven = ['lowercase']
  var passwordString = ''
  for (let i=0; i < passwordLength; i++ ){
    var passwordReqIndex = getRandomInt(passwordRequirementsGiven.length)

    if (passwordRequirementsGiven[passwordReqIndex] === 'lowercase'){
      passwordRequirementsCompleted.push('lowercase')
      var lowercaseIndex = getRandomInt(alphabet.length)
      passwordString = passwordString + alphabet[lowercaseIndex]

    } else if (passwordRequirementsGiven[passwordReqIndex] === 'uppercase'){
      passwordRequirementsCompleted.push('uppercase')
      var uppercaseIndex = getRandomInt(alphabet.length)
      passwordString = passwordString + alphabet[uppercaseIndex].toUpperCase()

    } else if (passwordRequirementsGiven[passwordReqIndex] === 'numeric'){
      passwordRequirementsCompleted.push('numeric')
      var number = getRandomInt(10)
      passwordString = passwordString + number;

      
    } else if (passwordRequirementsGiven[passwordReqIndex] === 'specialChar'){
      passwordRequirementsCompleted.push('specialChar')
      var specialCharIndex = getRandomInt(symbols.length)
      passwordString = passwordString + symbols[specialCharIndex]
    }

  console.log(passwordString)
  }
   for (let i = 0; i < passwordRequirementsGiven.length; i++){
    if (!passwordRequirementsCompleted.includes(passwordRequirementsGiven[i])){
      return generatePassword();
    }
   }
   console.log('before return',passwordString )  
  return passwordString

}


// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* on button click, prompt appears, asking how many chars? (must be between 8 and 128)
if not between 8 and 128, alert appears saying "please choose between 8 and 128 characters"
click ok, and must click generate password again to restart

when 8-128 characters entered, prompt appears asking to click ok to confirm for lowercase.
cancel will ignore.
repeat for all others, eg uppercase, numbers, special chars. 
if cancel click on all, alert says you must choose at least one character type


*/ 
  




