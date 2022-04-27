/*

  Given an array of n integers, rearrange them so that the sum of the absolute differences of all adjacent elements is minimized. Then, compute the sum of those absolute differences.

  Example
  n = 5
  arr = [1, 3, 3, 2, 4]

  If the list is rearranged as arr' = [1, 2, 3, 3, 4], the absolute differences are |1 - 2| = 1, |2 - 3| = 1, |3 - 3| = 0, |3 - 4| = 1.  The sum of those differences is 1 + 1 + 0 + 1 = 3.

  Function Description
  Complete the function minDiff in the editor below.

  minDiff has the following parameter:
      arr:  an integer array

  Returns:
      int:  the sum of the absolute differences of adjacent elements

  Constraints
  2 ≤ n ≤105
  0 ≤ arr[i] ≤ 109, where 0 ≤ i < n

*/

function minDiff(arr) {
  // Write your code here
  if (arr.length <= 1) {
    return 0;
  }

  const arrSort = arr.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < arrSort.length - 1; i++) {
    result += arrSort[i + 1] - arrSort[i];
  }

  return result;
}

console.log(minDiff([1, 3, 3, 2, 4])); // 3
console.log(minDiff([5, 1, 3, 7, 3])); // 6
console.log(minDiff([3, 2])); // 1
