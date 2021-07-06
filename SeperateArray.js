let arrayNumbers = [45, 12, 3, 6, 17, 0];
console.log(SeperateArray(arrayNumbers));
function SeperateArray(array) {
  let arrayOdds = [];
  let arrayEvens = [];
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 2 === 0) {
      arrayEvens.push(arrayNumbers[i]);
    } else arrayOdds.push(arrayNumbers[i]);
  }
  return {
    arrayEvens,
    arrayOdds,
  };
}
