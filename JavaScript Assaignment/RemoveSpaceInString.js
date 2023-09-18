function removeSpaceInString(strings) {
  const newString = strings.split(" ");
  return newString.join("");
}

const strings = "My name is Ranjana Jaiswal     ";
console.log(removeSpaceInString(strings));
