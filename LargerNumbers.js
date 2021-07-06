let array = [10, 25, 16, -5, 30, 15, 24];
let number = 16;

console.log(largerElements(array, number));
function largerElements(array, number) {
  let largerElems = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element > number) {
      largerElems.push(element);
    }
  }
  if (largerElems.length === 0) {
    let message = "Such values do not exist.";
    return message;
  } else return largerElems;
}
