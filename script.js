// possible password values
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digits = "0123456789";
var generateBut = document.getElementById("generate");
var copyBut = document.getElementById("copy")
var pwdResult = document.getElementById("password")
function refreshPage() {
    window.location.reload();
}
// User questions for password
var promptLength = prompt("How many chartacters would you like your password to contain? (8 - 128)");
var tagLength = parseInt(promptLength,10);

console.log(tagLength);

if(tagLength > 8 && tagLength < 128){
var tagSpecial = confirm("Click OK to confirm including special characters?");
console.log(tagSpecial);

if (tagSpecial === true) {
    tagSpecial = special;
}
else {
    special = "";
}

var tagNumeric = confirm("Click OK to confirm including numeric characters?");
console.log(tagNumeric);

if (tagNumeric === true) {
    tagNumeric = digits;
}
else {
    digits = "";
}

var tagLower = confirm("Click OK to confirm including lowercase characters?");
console.log(tagLower);

if (tagLower === true) {
    tagLower = lower;
}
else {
    lower = "";
}

var tagUpper = confirm("Click OK to confirm including uppercase characters?");
console.log(tagUpper);

if (tagUpper === true) {
    tagUpper = upper;
}
else {
    upper = "";
}

if (!upper && !lower && !special && !digits) {
 alert ("No characters were selected. Press OK to refresh the page to startover!");
refreshPage();

}

// chartacter equation
var characters = (special + digits + lower + upper);


// getting the code to randomize
function password(tagLength, characters) {
    var pwd = "";

    for (var i = 0; i < tagLength; i++) {

        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return pwd;
}
//do test to make sure all charcters appear and random
console.log(password(tagLength, characters));

// //add password to display
pwdResult.value = password(tagLength, characters);

// TO GENERATE A NEW PASSWORD WHEN YOU CLICK

generateBut.addEventListener("click", refreshPage);

// To Copy to Clipboard
function copyMe() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }

}
else{
    alert ("Please Select between 8 - 128 character. Press OK to refresh the page to startover!");
    refreshPage();
}

