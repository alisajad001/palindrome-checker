const inputText = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const resultDiv = document.querySelector("#result");

const checkPalindrome = () => {
  let word = inputText.value;

  if (word === "") {
    alert("Please input a value");
  }

  let wordLowerCased = word.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  let wordReversed = wordLowerCased.split("").reverse().join("");

  // Checks if word is palindrome
  if (wordLowerCased === wordReversed) {
    result.style.display = "block";
    result.innerText = `${word} is a palindrome`;
  } else {
    result.style.display = "block";
    result.innerText = `${word} is not a palindrome`;
  }
};

inputText.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkPalindrome();
    inputText.value = "";
  }
});

checkBtn.addEventListener("click", () => {
  checkPalindrome();
  inputText.value = "";
});
