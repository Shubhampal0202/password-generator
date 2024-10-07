const generatePassword = document.getElementById("generate-password");
const generatedPassword = document.getElementById("password");
const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const slider = document.getElementById("slider");
let sliderValue = document.getElementById("range-value");
const copyIcon = document.getElementById("copy-icon");

sliderValue.innerText = slider.value;

slider.addEventListener("input", (e) => {
  sliderValue.innerText = e.target.value;
});

generatePassword.addEventListener("click", (e) => {
  let newPassword = "";
  const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
  const numberString = "0123456789";
  const symbolString = "@#$%^&*{/}!";
  let finalStr = "";

  if (upperCase.checked) {
    finalStr = finalStr + upperCaseString;
  }
  if (lowerCase.checked) {
    finalStr = finalStr + lowerCaseString;
  }
  if (number.checked) {
    finalStr = finalStr + numberString;
  }
  if (symbol.checked) {
    finalStr = finalStr + symbolString;
  }
  if (finalStr == "") {
    alert("Please select atleast one option");
  }

  for (let i = 0; i < slider.value; i++) {
    newPassword =
      newPassword +
      finalStr.charAt(Math.floor(Math.random() * finalStr.length));
  }

  generatedPassword.innerText = newPassword;
});

copyIcon.addEventListener("click", (e) => {
  if (!generatedPassword.innerText) {
    alert("No Password to Copy");
    return;
  }

  window.navigator.clipboard.writeText(generatedPassword.innerText);
  alert("Password Copied!");
});
