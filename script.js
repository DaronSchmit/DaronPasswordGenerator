// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

function verifyLength(infoArray){
  if(typeof(parseInt(infoArray[0])) === "number" && parseInt(infoArray[0]) < 129 && parseInt(infoArray[0]) > 7){
    return true;
  }
  else{
    return false;
  }
}

function verifyCharChoice(infoArray){
  if(infoArray.includes(true)){
    return true;
  }
  else{
    return false;
  }
}

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

function containsCharInArray(pass, array){
  for(i in array){
    if(pass.includes(array[i])){
      return true;
    }
  }
  return false;
}

function validatePassword(info, pass){
  let checkLength;
  let checkUpperArr;
  let checkLowerArr;
  let checkSpecArr;
  let checkNumArr;

  let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let specArr = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
  let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  

  if(pass.length === parseInt(info[0])){
    checkLength = true;
  }
  else{
    checkLength = false;
  }
  console.log("checked length: " + checkLength);

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

  if(checkLength && checkUpperArr && checkLowerArr && checkSpecArr && checkNumArr){
    console.log("all checks are true");
    return true;
  }
  else{
    console.log("a check is false");
    return false;
  }
  

}

function buildPassArray(reqArray){
  let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let specArr = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
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

function buildPassword(passInfo){
  let length = passInfo[0];
  let password = "";
  let verify = false;
  let charArray = buildPassArray(passInfo);
  for(let i = 0; i < length; i++){
  password = password.concat(charArray[Math.floor(Math.random() * (charArray.length - 1))]);
  console.log(password);
  }
  return password;
}

function writePassword(){
  let info = getPassInfo();
  if(info === "Input Invalid"){
    return null;
  }
  else{
      let verify = false;
  let attempts = 0;
  let password = "";
  while(!verify && attempts < 100){
    password = buildPassword(info);
    if(validatePassword(info, password)){
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


