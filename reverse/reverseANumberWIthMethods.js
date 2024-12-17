const reverseANumberWithoutHelpers = (number) => {
  //82456
  let reversed = 0;
  let isNegativeInput = number < 0; // false
  number = Math.abs(number); // 82456
  while (number > 0) {
    let lastDigit = number % 10; // 6 first iteration
    reversed = reversed * 10 + lastDigit; // 60 * 10 = 60 + 6 = 66  first iteration
    number = Math.floor(number / 10); // 60 / 10 = 6 first iteration
  }
  if (isNegativeInput) return -reversed;
  return reversed;
};
console.log(reverseANumberWithoutHelpers(65428));
