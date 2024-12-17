let integersToBeReversed = 123146;
const reverseNumber = (num) =>
  Number(num.toString().split("").reverse().join(""));
console.log("Before - ", integersToBeReversed);
console.log("After - ", reverseNumber(integersToBeReversed));
