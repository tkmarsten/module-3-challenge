/*
* Generates the password according the user specifications.
* @return string of the password
*/
function generatePassword() {
  let pwLength = prompt('Select the length of your password between 8 and 128 characters')

  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    pwLength = prompt('Invalid input, please input a number between 8 and 128')
  }

  let count = 0
  let choices = []
  while (count === 0) {
    if (confirm("Include lowercase?")) {
      let lowercaseChars = generateLowercase()
      choices[count] = lowercaseChars
      count++
    }

    if (confirm("Include uppercase?")) {
      let uppercaseChars = generateUppercase()
      choices[count] = uppercaseChars
      count++
    }

    if (confirm("Include numbers?")) {
      let digits = generateDigits()
      choices[count] = digits
      count++
    }

    if (confirm("Include special characters?")) {
      let specialChars = generateSpecialChars()
      choices[count] = specialChars
      count++
    }

    if (count === 0) {
      alert('You must select at least one criteria for your password')
    }
  }

  let password = ''
  for (let i = 0; i < pwLength; i++) {
    let randCharSet = Math.floor(Math.random() * count)
    let randChar = Math.floor(Math.random() * choices[randCharSet].length)
    password = password.concat(choices[randCharSet][randChar])
  }

  return password
}

/*
* Generates the alphabet in lowercase.
* @return the array of characters
*/
function generateLowercase() {
  let chars = []
  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    chars[i - 97] = String.fromCharCode(i)
  }
  return chars
}

/*
* Generates the alphabet in uppercase.
* @return the array of characters
*/
function generateUppercase() {
  let chars = []
  for (let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
    chars[i - 65] = String.fromCharCode(i)
  }
  return chars
}

/*
* Generates the digits from 0-9.
* @return the array of digits
*/
function generateDigits() {
  let nums = []
  for (let i = 0; i <= 9; i++) {
    nums[i] = i
  }
  return nums
}

/*
* Creates an array of special characters.
* @return the array of characters
*/
function generateSpecialChars() {
  let chars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '/', '?', '-', '_', '+', '=', ',', '.', '<', '>', '~', '^', '[', ']']
  return chars
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);