/**

  Given an integer k and a list of integers, count the number of distinct valid pairs of integers (a, b) in the list for which a + k = b. Two pairs of integers (a, b) and (c, d) are considered distinct if at least one element of (a, b) does not also belong to (c, d). Note that the elements in a pair might be the same element in the array. An instance of this is below where k = 0.

  Example
  n = 4
  numbers = [1, 1, 1, 2]
  k = 1

  This array has three different valid pairs: (1, 1) and (1, 2) and (2, 2). For k = 1, there is only 1 valid pair which satisfies a + k = b: the pair (a, b) = (1, 2).

  n = 2
  numbers = [1, 2]
  k = 0

  There are three valid pairs: (1, 1), (2, 2) and (1, 2). For k = 0, two valid pairs satisfy a + k = b: 1 + 0 = 1 and 2 + 0 = 2.

  Function Description 
  Complete the function countPairs in the editor below.

  countPairs has the following parameter(s):
      int numbers[n]:  array of integers
      int k: target difference

  Returns
      int: number of valid (a, b) pairs in the numbers array that have a difference of k

  Constraints
  2 ≤ n ≤ 2 × 10^5
  0 ≤ numbers[i] ≤ 10^9, where 0 ≤ i < n
  0 ≤ k ≤ 10^9

*/

function countPairs(numbers, k) {
  // Write your code here
  let noDuplicate = [...new Set(numbers)].sort((a, b) => a - b);
  let result = 0;
  let counter = 0;

  while (counter < noDuplicate.length) {
    if (noDuplicate.indexOf(+noDuplicate[counter] + k) >= 0) {
      result++;
      noDuplicate.splice(counter, 1);
    } else {
      counter++;
    }
  }

  return result;
}

console.log(countPairs([1, 1, 1, 2], 1)); // 1
console.log(countPairs([1, 2], 0)); // 2
console.log(countPairs([1, 1, 2, 2, 3, 3], 1)); // 2
console.log(countPairs([1, 2, 3, 4, 5, 6], 2)); // 4
console.log(countPairs([1, 2, 5, 6, 9, 10], 2)); // 0
