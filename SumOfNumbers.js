let string = "Y45KHL120mn10P";
console.log(SumOfNumbersString(string));
function SumOfNumbersString(string) {
  let stringNumber = "";
  let sumOfNumbers = 0;
  for (let i = 0; i < string.length; i++) {
    if (Number(string[i]) === "number") {
      stringNumber.concat(string[i]);
      console.log(stringNumber);
    } else {
      sumOfNumbers = sumOfNumbers + Number(stringNumber);
    }
  }
  return sumOfNumbers;
}
