/*get the number of characters*/
let alpbh = "abcdefghijklmnopqrstuvwxyz";
let upperAlpbh = alpbh.toUpperCase();
let lowerAlpbh = alpbh.toLowerCase();
let pwdlength = 10;
let generatedpwd = "";

// function generate() {

let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  
  if (document.getElementById("uppercase")) {
    for (let i = 1; i <= pwdlength; i++) {
      let char = Math.floor(Math.random() * upperAlpbh.length);
      generatedpwd += upperAlpbh.substring(char, char + 1);
    }
    document.getElementById("password__result").value = generatedpwd;
    
  } 
});

// console.log(generatedpwd);

function charLength() {
  let charLength = document.getElementById("length").value;
  //   console.log(charLength);
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}

document.getElementById("length").addEventListener("change", charLength);
