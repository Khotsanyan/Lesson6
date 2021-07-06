let string =
  "Which would be worse - to live as a monster, orto die as a good man?";
console.log(longestWord(string));
function longestWord(string) {
  arrayOfString = string.split(" ");
  let longest = arrayOfString[0];
  for (let i = 1; i < arrayOfString.length; i++) {
    const element = arrayOfString[i];

    if (element.length > longest.length) {
      longest = element;
    }
  }
  return longest;
}
