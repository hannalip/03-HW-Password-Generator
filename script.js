// function values {

// }

// User questions for password
var promptLength = prompt("How many chartacters would you like your password to contain? (8 -124)");
var tagLength = parseInt(promptLength,10)
// if (lengthtag > "124") {
// alert("The number is to large, pick a smaller number");
// if (lengthtag < "8") {
// alert("The number is to small, pick a bigger number");

var tagSpecial = confirm("Click OK to confirm including special characters?");

var tagNumeric = confirm("Click OK to confirm including numeric characters?");

var tagLower = confirm("Click OK to confirm including lowercase characters?");

var tagUpper = confirm("Click OK to confirm including uppercase characters?");

// // function
// function generate {}


// possible password values
var special = "!@#$%&*()_+-=[]|,./?><";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digits = "0123456789";

var generateBut = document.getElementById("generate");
var copyBut = document.getElementById("copy")
var pwdResult = document.getElementById("password")

// function charTotal() {
    var characters = special + lower + upper + digits;

    if tagSpecial === true
    



function password(tagLength, characters) {
    var pwd = "";

    for (var i = 0; i < tagLength; i++) {

        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return pwd;

}





// var password = ""

// if (lengthtag !== "")
// alert("please enter a number between 8 - 124");
// else {

// }

// Random rnd = new Random();

// int n1 = rnd.nextInt(125 - 8) + 8;



// TO GENERATE A NEW PASSWORD WHEN YOU CLICK

// submitEl.addEventListener("click", function());


// //add password to display
// document.getElementById("password").value = password;