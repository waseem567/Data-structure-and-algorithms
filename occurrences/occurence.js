// LEETCODE

function findOccurrenceIndex(haystack, needle) {
  return haystack.indexOf(needle);
}

// WITHOUT USING INDEX OF

const findOccurrencePatternIndex = (str, word) => {
  let startIndex = -1;
  for (let i = 0; i <= str.length - word.length; i++) {
    let chunk = str.slice(i, i + word.length);
    if (chunk === word) {
      startIndex = i;
      break;
    }
  }
  return startIndex === -1 ? "Word does not exist in string" : startIndex;
};
console.log(findOccurrencePatternIndex("The whole string", "string")); // should return 10
