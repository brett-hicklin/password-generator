// Assignment Code
// goes to HTML doc and finds the generate ID inside of button
var generateBtn = document.querySelector("#generate");

var passwordLength = 8;
var isLowercase = true;
var isUppercase = false;
var isNumeric = false;
var isSpecialChar = false;
var passwordReqs = getPasswordReqs();

function getPasswordReqs(){
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

  for (let i=0; i < passwordLength; i++ ){
    getRandomInt()
    return 
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

  




*/