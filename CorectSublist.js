let string = "pencil";
let stringsArray = ["licnep", "circular", "pupil", "nilcpe", "leppnec"];
let corectAnagrams = [];

corectSublist(string, stringsArray);

function corectSublist(string, array) {
  let str = string.split("").sort().join("");
  for (item of array) {
    if (item.split("").sort().join("") === str) {
      corectAnagrams.push(item);
    }
  }
  console.log(corectAnagrams);
}
