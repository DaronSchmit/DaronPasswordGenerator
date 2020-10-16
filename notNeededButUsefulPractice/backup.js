// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getUpper(){
	return confirm("Would you like the password to include an upper case letter?");
}

function getLower(){
	return confirm("Would you like the password to include a lower case letter?");
}

function getNumber(){
	return confirm("Would you like the password to include a number?");
}

function getSpecial(){
	return confirm("Would you like the password to include a special character?");
}

function validate(prompt){

}

function validateChars(reqs){
  if(requirements[1] === true || requirements[2] === true || requirements[3] === true){
    return true;
  }
  else{
    return false;
  }

function getLength(){
    //get length from user via prompt, if it can't be resolved to a number, keep going up to 5 times
    let verifyLength = false;
    let attemptsRemaining = 5;
    while(verifyLength === false && attemptsRemaining > 0){
      length = prompt("How long would you like your password to be? Needs to be between 8 and 128.");
      if(typeof(parseInt(length)) === "number" && parseInt(length) < 129 && parseInt(length) > 7){
        length = parseInt(length);
        verifyLength = true;
      }
      else if (length === null){
        return;
      }
      else {
        attemptsRemaining--;
        alert("That wasn't a valid input. Please try again. You have " + attemptsRemaining + " attemptsRemaining left");
        if(attemptsRemaining === 0){
          return;
         }
      }
    }
  
}

//Get password parameters from user
function getPassInfo(){
  let attemptsRemaining = 5;
  let requirements = [];

  requirements.push(getLength(), getUpper(), getLower(), getSpecial(), getNumber());

  if(validateChars())
  attemptsRemaining = 5;
  while(verifyChars === false && attemptsRemaining > 0){
    if(requirements[1] === true || requirements[2] === true || requirements[3] === true){
      verifyChars = true;
    }
    else if (length === null){
      return;
    }
    else {
      attemptsRemaining--;
      alert("You need to select at least one set of valid characters. Please try again. You have " + attemptsRemaining + " attempts left");
    }
  }
  

  return requirements;
}

let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specArr = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function getPassArray(reqArray){
	let passArray = [];
	if(reqArray[1]){
    	passArray.push(upperArr);
    }
    if(reqArray[2]){
    	passArray.push(lowerArr);
    }
    if(reqArray[3]){
    	passArray.push(specArr);
    }
    if(reqArray[4]){
    	passArray.push(numArr);
    } 
    return passArray;
}

function generatePassword(){
  let requirements = getPassInfo();
  let passArray = getPassArray(requirements);
  console.log("here are the valid characters")
  console.log(passArray);
  Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
  

    //TODO for loop, concat random characters into empty string length times
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}