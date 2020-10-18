// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//functions to get user input data. getLength expects a string that is an integer, 
//get Upper, Lower, Number, Special return booleans if the user wants that set of chars
//called in getPassInfo()
function getLength(){
  return prompt("How long would you like your password to be? Needs to be between 8 and 128.");
}

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


//pulls user inputted length from user inputted info (infoArray), checks it against predetermined value limits of 8<=length<=128
function verifyLength(infoArray){
  if(typeof(parseInt(infoArray[0])) === "number" && parseInt(infoArray[0]) < 129 && parseInt(infoArray[0]) > 7){
    return true;
  }
  else{
    return false;
  }
}

//makes sure user selected at least one set of chars to generate password with
function verifyCharChoice(infoArray){
  if(infoArray.includes(true)){
    return true;
  }
  else{
    return false;
  }
}

//creates an array out of the user inputted information. [length  of password (string), User wants Uppers (bool), User wants Lowers (bool), User wants Specials (bool), ...
// ...User wants Numbers (bool)]. Self-Checks that user submitted valid information to build a password via verifyLength() and VerifyCharChoice(). Gives user 5 chances.
//returns "Input Invalid" so that writePassword will bail instead of throwing an error
//called by writePassword
function getPassInfo(){
  let passInfo = [];
  let attempts = 5;
  passInfo.push(getLength(), getUpper(), getLower(), getSpecial(), getNumber());
  if (verifyLength(passInfo) && verifyCharChoice(passInfo)){
    return passInfo;
  }
  else{
      alert("Your choices in password requirements were invalid. Remember to input a number between and including 8 and 128, and confirming at least one set of Characters. Please try again");
      return "Input Invalid";
  }
}

//checks that a word (password) contains at least one character from an array. 
//Called for each array individually in validatePassword
function containsCharInArray(pass, charArrays){
  for(i in charArrays){
    if(pass.includes(charArrays[i])){
      return true;
    }
  }
  return false;
}

//validates that the password meets all the user inputted criteria
//called by writePassword()
function validatePassword(info, pass){
  let checkLength;
  let checkUpperArr;
  let checkLowerArr;
  let checkSpecArr;
  let checkNumArr;

  //I wish I only had to set these once, but I was having errors, so they're included in both functions that need them. Could be worse. 
  let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let specArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", ];
  let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
//checks that the length index of the array can have a number pulled out of it.
  if(pass.length === parseInt(info[0])){
    checkLength = true;
  }
  else{
    checkLength = false;
  }
  console.log("checked length: " + checkLength);

  //if the array has a 'true' value in index 1, 2, 3, or 4 (the user wanted those characters in the password), checks that the password contains at least one character from that set of characters. If the user didn't select a specific set of characters
  //if the array has a 'false' value in the index, doesn't check password for a character in that set.
  //I'd have liked to make this into one function, but it got weird. Turns out this is cleaner.
  if((info[1] && containsCharInArray(pass, upperArr)) || !info[1]){
    checkUpperArr = true;
  }
  else{
    checkUpperArr = false;
  }
  console.log("checked UpperArr: " + checkUpperArr);
  if((info[2] && containsCharInArray(pass, lowerArr)) || !info[2]){
    checkLowerArr = true;
  }
  else{
    checkLowerArr = false;
  }
  console.log("checked LowerArr: " + checkLowerArr);
  if((info[3] && containsCharInArray(pass, specArr)) || !info[3]){
    checkSpecArr = true;
  }
  else{
    checkSpecArr = false;
  }
  console.log("checked SpecArr: " + checkSpecArr);
  if((info[4] && containsCharInArray(pass, numArr)) || !info[4]){
    checkNumArr = true;
  }
  else{
    checkNumArr = false;
  }
  console.log("checked NumArr: " + checkNumArr);
  
  //only returns true if password contains a char from every set of chars if needed. 
  //if user didn't select to use a set of chars, the check is true, so it works out. 
  //verifyCharChoice prevents this from returning true if user selected no sets of Chars
  if(checkLength && checkUpperArr && checkLowerArr && checkSpecArr && checkNumArr){
    console.log("all checks are true");
    return true;
  }
  else{
  console.log("a check is false");
    return false;
  }
  
}

//builds the array of all valid characters according to the user's choices
//called by buildPassword
function buildPassArray(reqArray){
  let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let specArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", ];
  let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	let passArray = [];
	if(reqArray[1]){
    	passArray = passArray.concat(upperArr);
    }
    if(reqArray[2]){
    	passArray = passArray.concat(lowerArr);
    }
    if(reqArray[3]){
    	passArray = passArray.concat(specArr);
    }
    if(reqArray[4]){
    	passArray = passArray.concat(numArr);
    }
    return passArray;
}

//takes user information and builds a password with it by generating a random number between 0 and the valid char array length via math.random
//takes the array value at that index to add to the password
//repeats until the password is as long as the user specified
//it is possible that this doesn't build a valid password, which is caught by validate password
//called by writePassword()
function buildPassword(passInfo){
  let length = passInfo[0];
  let password = "";
  let charArray = buildPassArray(passInfo);
  for(let i = 0; i < length; i++){
    password = password.concat(charArray[Math.floor(Math.random() * (charArray.length - 1))]);
    console.log(password);
  }
  return password;
}

//gets user inputted requirements (getPassInfo()),if user didn't input valid values during getPassInfo, it bails. Else, it continues
//sets password to "", then reassigns it to an actual password using builpassword
//attempts to validate password. If it's validated, returns password and updates elementId, if not, it tries again up to 100 times.
//Added the 100 tries parameter to make sure it didn't encounther the EXTREMELY UNLIKELY scendario where it never generated a valid password.
function writePassword(){
  let userReqs = getPassInfo();
  if(userReqs === "Input Invalid"){
    return null;
  }
  else{
    let verify = false;
    let attempts = 0;
    let password = "";
    while(!verify && attempts < 100){
      password = buildPassword(userReqs);
      if(validatePassword(userReqs, password)){
        verify = true;
        attempts++;
      }
      else{
        verify = false;
        console.log("password generation failed, trying again");
        attempts++;
      }
    }

    console.log(password);
    document.getElementById("password").innerHTML = password;
    return password;
  }
}


