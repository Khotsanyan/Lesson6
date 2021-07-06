let phoneNumber = +25755241;
let strPhoneNumber = phoneNumber + "";
console.log(BadOrGoodNumber(phoneNumber));
function BadOrGoodNumber(phoneNumber) {
  let status;
  if (strPhoneNumber.length === 10) {
    status = phoneNumber;
  } else if (strPhoneNumber.length === 11 && strPhoneNumber[0] === "+")
    status = strPhoneNumber.replace("+");
  else status = "bad number";
  return status;
}
