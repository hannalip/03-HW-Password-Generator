// possible password values
var special = "!@#$%&*()_+-=[]|,./?><";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digits = "0123456789";

// User questions for password

var promptLength = prompt("How many chartacters would you like your password to contain? (8 - 124)");

var tagLength = parseInt(promptLength, 10);


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


var generateBut = document.getElementById("generate");
var copyBut = document.getElementById("copy")
var pwdResult = document.getElementById("password")

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

// //add password to display
pwdResult.value = password(tagLength, characters);

// TO GENERATE A NEW PASSWORD WHEN YOU CLICK
function refreshPage() {
    window.location.reload();
}
generateBut.addEventListener("click", refreshPage);

// // To Copy to Clipboard
// function copyMe () {
//     copyText.select();
//     document.execCommand("generate");
//   }
// copyBut.addEventListener("click",copyMe);
