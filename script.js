const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const selectAll = document.getElementById("selectAll");
const generatedPass = document.getElementById("generatedPass");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const lowercases = "abcdefghijklmnopqrstuvwxyz";
const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNums = "1234567890";
const allSymbols = "!@#$%^&*()_+";

selectAll.addEventListener("change", () => {
  const isChecked = selectAll.checked;
  lowercase.checked = isChecked;
  uppercase.checked = isChecked;
  numbers.checked = isChecked;
  symbols.checked = isChecked;
});

[lowercase, uppercase, numbers, symbols].forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (
      !lowercase.checked &&
      !uppercase.checked &&
      !numbers.checked &&
      !symbols.checked
    ) {
      selectAll.checked = false;
    } else {
      selectAll.checked =
        lowercase.checked &&
        uppercase.checked &&
        numbers.checked &&
        symbols.checked;
    }
  });
});

generateBtn.addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  let charSet = "";
  charSet += lowercase.checked ? lowercases : "";
  charSet += uppercase.checked ? uppercases : "";
  charSet += numbers.checked ? allNums : "";
  charSet += symbols.checked ? allSymbols : "";

  if (charSet === "") {
    generatedPass.textContent = "Please select at least one character type.";
    return;
  }
  if (isNaN(length) || length < 4 || length > 100) {
    generatedPass.textContent = "Please choose a length between 4 and 100.";
    return;
  }
  if (length > 30) {
    generatedPass.classList.add("truncate");
  }
  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    generatedPassword += charSet[randomIndex];
  }
  generatedPass.textContent = generatedPassword;
});

copyBtn.addEventListener("click", () => {
  const password = generatedPass.textContent;
  if (password && !password.startsWith("Please")) {
    navigator.clipboard.writeText(password).then(() => {
      copyBtn.textContent = "Copy";
      setTimeout(() => (copyBtn.textContent = "Copied"), 1000);
    });
  }
});
