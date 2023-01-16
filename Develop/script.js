// Assignment Code
// goes to HTML doc and finds the generate ID inside of button
var generateBtn = document.querySelector("#generate");
var alphabet = ['a', 'b', 'c', 'd' ,'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var symobols = ['!','"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']



// collects the data from which character requirements will be used for password, returns as array.
function getPasswordReqs(){
  var isLowercase = true;
  var isUppercase = true;
  var isNumeric = false;
  var isSpecialChar = false;
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
  // var passwordReqs = getPasswordReqs();
  var passwordReqs = ['lowercase']
  var passwordString = ''
  for (let i=0; i < passwordLength; i++ ){
    var passwordReqIndex = getRandomInt(passwordReqs.length)

    if (passwordReqs[passwordReqIndex] === 'lowercase'){
      var lowercaseIndex = getRandomInt(alphabet.length)
      passwordString = passwordString + alphabet[lowercaseIndex]

    } else if (passwordReqs[passwordReqIndex] === 'uppercase'){
      var uppercaseIndex = getRandomInt(alphabet.length)
      passwordString = passwordString + alphabet[uppercaseIndex].toUpperCase()

    } else if (passwordReqs[passwordReqIndex] === 'numeric'){
      var number = getRandomInt(10)
      passwordString = passwordString + number;

      
    } else if (passwordReqs[passwordReqIndex] === 'specialChar'){
      var specialCharIndex = getRandomInt(symobols.length)
      passwordString = passwordString + symobols[specialCharIndex]
    }

  console.log(passwordReqIndex)
  }
}

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* prompt user for criteria
  create password length prompt
  create character prompt 

  For each character in the password 
Determine what type of character (lowercase, uppercase, number, symbol)
Randomly select that type of character 
    If that character type is lowercase or uppercase, generate random num between 0-25, gran associated letter
        If lowercase call toLowercase
        If uppercase call toUppercase
    If that character type is number, randomly generate number between 0 and 9
    If that char type is a symbol, randomly generate number between 0 and y where y is number of symbols and return 
Add that character to the password string
  




*/