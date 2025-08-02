const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const selectAll = document.getElementById("selectAll");
const generatedPass = document.getElementById("generatedPass");
const generateBtn = document
  .getElementById("generateBtn")
  .addEventListener("click", () => {
    const length = document.getElementById("length").value;
    let lowercases = "abcdefghijklmnopqrstuvwxyz";
    let uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let allNums = "1234567890";
    let Allsymbols = "!@#$%^&*()_+";
    let Randomchar = "";
    let generatedPassword = "";

    Randomchar += lowercase.checked ? lowercases : "";
    Randomchar += uppercase.checked ? uppercases : "";
    Randomchar += numbers.checked ? allNums : "";
    Randomchar += symbols.checked ? Allsymbols : "";
    Randomchar += selectAll.checked
      ? lowercases + uppercases + allNums + Allsymbols
      : "";
    if (Randomchar == "") {
      generatedPass.textContent = "Please tick a checkbox.";
    } else if (length < 4 || length > 40 || length === NaN) {
      generatedPass.textContent =
        "Please choose a Password length between 4 to 40";
    } else {
      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * Randomchar.length);
        generatedPassword += Randomchar[randomIndex];
      }
      generatedPass.textContent = "Generated Password: " + generatedPassword;
    }
  });
