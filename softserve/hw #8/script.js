8.1;
function upperCase(str) {
  if (/^[A-Z]/.test(str)) {
    return "String's starts with uppercase character";
  } else {
    return "String's not starts with uppercase character";
  }
}

8.2;
function checkEmail(email) {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
}

8.3;
function swapSubstrings(inputString, substring1, substring2) {
  const regex = new RegExp(`(${substring1})(.*)(\\s${substring2})`);
  return inputString.replace(regex, `$3$2$1`);
}

const inputString = "Java Script";
const substring1 = "Java";
const substring2 = "Script";
const result = swapSubstrings(inputString, substring1, substring2);
console.log(result); 

8.4;
function validateCreditCardNumber(cardNumber) {
  const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  return regex.test(cardNumber);
}

const cardNumber = "9999-9999-9999-9999";
const isValid = validateCreditCardNumber(cardNumber);
console.log(isValid);

8.5;
function validateEmail(email) {
  const regex =
    /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*@[A-Za-z0-9]+(?:[-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
  return regex.test(email);
}

const email = "example_email-123@example.com";
const valid = validateEmail(email);
console.log(valid);

8.6;
function checkEmail(email) {
  const regex =
    /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*@[A-Za-z0-9]+(?:[-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;

  if (regex.test(email)) {
    return "Email is correct!";
  } else {
    return "Email is not correct!";
  }
}

console.log(checkEmail("my_mail@gmail.com")); 
console.log(checkEmail("#my_mail@gmail.com")); 
console.log(checkEmail("my_ma--il@gmail.com")); 

8.7;
function checkLogin(login) {
  const regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;

  if (!regex.test(login)) {
    return false;
  }

  const numbers = login.match(/[0-9]+(?:\.[0-9]+)?/g);

  return numbers !== null ? numbers : [];
}

console.log(checkLogin("ee1.1ret3")); 
console.log(checkLogin("ee1*1ret3")); 
