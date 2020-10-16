// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//arrays of valid chars for user to select from
let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specArr = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
let lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let passwordInfo = {
    //password requirement attributes default all to null
    needsUppercase: null,
    needsLowercase: null,
    needsSpecial: null,
    needsNumbers: null,
    requiredLength: null,

    //validation attributes, default all to null
    hasOneCharType: null,
    lengthIsValid: null,

    //methods to set requirement attributes
    getUpper: function(){
        this.needsUppercase = confirm("Would you like the password to include an upper case letter?");
    },
    getLower: function(){
        this.needsLowercase = confirm("Would you like the password to include a lower case letter?");
    },
    getNumber: function(){
        this.needsNumbers = confirm("Would you like the password to include a number?");
    },
    getSpecial: function(){
        this.needsSpecial = confirm("Would you like the password to include a special character?");
    },
    getLength: function(){
        this.requiredLength = prompt("How long should this password be? (8-128 characters)");
    },

    //validates that at least one set of chars is selected
    validateChars: function(){
        if(this.needsUppercase || this.needsLowercase || this.needsSpecial || this.needsNumbers){
            this.hasOneCharType = true;
        }
        else{
            this.hasOneCharType = false;
        }
    },
    //validates that the user inputted a number and is within value parameters
    validateLength: function(){
        if(typeof(parseInt(this.requiredLength)) === "number" && (7 < this.requiredLength < 129)){
            this.lengthIsValid = true;
        }
        else{
            this.lengthIsValid = false;
        }
    },
}

let attemptsremaining = 5;
while(passwordInfo.lengthIsValid !== true && attemptsremaining > 0){
    passwordInfo.getLength();
    passwordInfo.validateLength();
}