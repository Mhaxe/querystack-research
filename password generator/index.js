function hasRequiredCharacters(text) {
  const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const symbols = "!@#$%^&*()-_=+[]{};:'\",.<>/?|\\";
  
  let hasCapitalLetter = false;
  let hasNumber = false;
  let hasSymbol = false;

  for (const char of text) {
    if (alpha.includes(char)) {
      hasCapitalLetter = hasCapitalLetter || char.toUpperCase() === char;
    } else if (numbers.includes(char)) {
      hasNumber = true;
    } else if (symbols.includes(char)) {
      hasSymbol = true;
    }

    if (hasCapitalLetter && hasNumber && hasSymbol) {
      return true;
    }
  }

  return false;
}
function Validity(text){
  if(text.length >= 8 && hasRequiredCharacters(text)){
    return true;
  }
  else{
    return false
  }
}
function displayDom(message, color) {
  var messageElement = document.getElementById('problems');
  messageElement.textContent = '*'+message;
  if (color) {
    messageElement.style.color = color;
  }
}
document.getElementById("submit").onclick = function(){
  var password1 = document.getElementById('f1').value; // Use .value to get the input value
  var password2 = document.getElementById('f2').value; // Use .value to get the input value

  if(password1 === password2) {
    if (Validity(password1)) {
      displayDom('The password is strong','lightgreen');
    } else {
      displayDom('This password is weak','red');
    }
  } else {
    displayDom('Password does not match','red');
  }
}
document.getElementById('generate-button').addEventListener('click', function() {

  window.location.href = 'password_generator.html';
});