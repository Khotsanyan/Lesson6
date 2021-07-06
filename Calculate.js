let array = [5, 4, 15, 8];

console.log(Sum(array));
console.log(Multiplicate(array));
console.log(Differencial(array));
console.log(Division(array));

function Sum(array) {
  let sum = array[0];
  for (let i = 1; i < array.length; i++) sum = sum + array[i];
  return sum;
}

function Multiplicate(array) {
  let multi = array[0];
  for (let i = 1; i < array.length; i++) multi = multi * array[i];
  return multi;
}

function Differencial(array) {
  let dif = array[0];
  for (let i = 1; i < array.length; i++) dif = dif - array[i];
  return dif;
}

function Division(array) {
  let div = array[0];
  for (let i = 1; i < array.length; i++) div = array[0] / array[i];
  return div;
}
