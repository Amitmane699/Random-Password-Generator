function generatePassword(length, lowercase, uppercase, numbers, symbols) {
    var charset = "";
    if (lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
      charset += "0123456789";
    }
    if (symbols) {
      charset += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
    var password = "";
    for (var i = 0; i < length; i++) {
      var index = Math.floor(Math.random() * charset.length);
      password += charset.charAt(index);
    }
    return password;
  }
  
  function copyPassword() {
    var passwordText = document.getElementById("password");
    passwordText.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
  }
  
  var generateButton = document.getElementById("generate");
  generateButton.addEventListener("click", function() {
    var length = document.getElementById("length").value;
    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;
    var password = generatePassword(length, lowercase, uppercase, numbers, symbols);
    var passwordText = document.getElementById("password");
    passwordText.value = password;
  });
  
  var copyButton = document.getElementById("copy");
  copyButton.addEventListener("click", copyPassword);
  