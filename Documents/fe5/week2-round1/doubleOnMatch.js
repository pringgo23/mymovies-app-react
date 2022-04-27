function doubleSize(arr, b) {
  // Write your code here
  const arrSort = arr.sort((a, b) => a - b);
  let result = b;

  /**
   * i = 0
   * arr[i] = 1
   * 1 != result
   * result = 2
   *
   * i = 1
   * arr[i] = 2
   * 2 == result
   * result * 2 = 4
   */

  for (let i = 0; i < arrSort.length; i++) {
    if (arrSort[i] === result) {
      result *= 2;
    }
  }

  return result;
}

console.log(doubleSize([1, 2, 4, 11, 12, 8], 2)); // 16
console.log(doubleSize([1, 2, 3, 1, 2], 1)); // 4
console.log(doubleSize([1, 1, 1], 1)); // 2
console.log(doubleSize([2, 5, 4, 6, 8], 2)); // 16
