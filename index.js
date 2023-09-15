// Render alphabets
// ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const alphabets = Array.from({ length: 52 }, (_, index) =>
  String.fromCharCode(index + 65 <= 90 ? index + 65 : index + 6 + 65)
);

function randomAlphabet(length = 52) {
  return Math.floor(Math.random() * length);
}

function randomNameNotRule() {
  const multipleNames = [];

  for (let i = 1; i <= 10; ++i) {
    let name = "";
    //
    for (let j = 1; j <= 3; ++j) {
      name += alphabets[randomAlphabet()];
    }
    multipleNames.push(name);
  }

  console.log(multipleNames);
}

function randomFirstCharIsUppercaseAndRemaningAreLowercase() {
  const multipleNames = [];

  for (let i = 1; i <= 10; ++i) {
    let name = "";
    name += alphabets[randomAlphabet(26)];
    for (let j = 2; j <= 3; ++j) {
      name += alphabets[26 + randomAlphabet(26)];
    }
    multipleNames.push(name);
  }

  console.log(multipleNames);
}

function randomFirstCharIsLowercaseAndRemaningAreUppercase() {
  const multipleNames = [];

  for (let i = 1; i <= 10; ++i) {
    let name = "";
    name += alphabets[26 + randomAlphabet(26)];
    for (let j = 2; j <= 3; ++j) {
      name += alphabets[randomAlphabet(26)];
    }
    multipleNames.push(name);
  }

  console.log(multipleNames);
}

/**
 * Refactor:
 * Create new function for create new character
 */

function createNewName(length, createNewCharacterFunc) {
  let name = "";
  for (let i = 1; i <= length; ++i) {
    name += createNewCharacterFunc(i);
  }
  return name;
}

// randomFirstCharIsUppercaseAndRemaningAreLowercase -> refactored
function randomMultipleNames(numberOfNames, numberOfCharacterName) {
  const multipleNames = [];

  for (let i = 1; i <= numberOfNames; ++i) {
    const newName = createNewName(numberOfCharacterName, (index) =>
      index === 1
        ? alphabets[randomAlphabet(26)]
        : alphabets[26 + randomAlphabet(26)]
    );

    multipleNames.push(newName);
  }

  return multipleNames;
}

console.log(randomMultipleNames(10, 3));
