const a1 = [1, 2, 3, 4, 5, 9];
const a2 = [2, 4, 6, 1, 3, 4, 5, 8];
// output -> [1,1, 1, 2, 2, 3, 3,4, 4, 4,5, 5,6,8,9]
// [1, 2, 3,4, 5,6, 8, 9]
// merging two arrays
const mergeHandler = (a, b) => {
  return [...a, ...b];
};
// sorting an array
const sortHandler = (mergedArray) => {
  for (i = 0; i < mergedArray.length; i++) {
    for (a = i + 1; a < mergedArray.length; a++) {
      if (mergedArray[i] > mergedArray[a]) {
        let temp = mergedArray[i];
        mergedArray[i] = mergedArray[a];
        mergedArray[a] = temp;
        // mergedArray[i] = mergedArray[i] + mergedArray[a];
        // mergedArray[a] = mergedArray[i] - mergedArray[a];
        // mergedArray[i] = mergedArray[i] - mergedArray[a];
      }
    }
  }
  return mergedArray;
};
// removing duplication
const duplicationRemoveHandler = (sortedArr) => {
  const unique = [];
  for (let i = 0; i < sortedArr.length; i++) {
    if (!unique.includes(sortedArr[i])) unique.push(sortedArr[i]);
  }
  return unique;
};

const merged = mergeHandler(a1, a2);
const sortedArray = sortHandler(merged);
const uniqueArr = duplicationRemoveHandler(sortedArray);

console.log("Merged => Sorted => Unique => ", uniqueArr);
