function maximumSum(arr) {
  // Write your code here
  let fromMin = null;
  let fromMax = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[fromMin] > arr[i] || !fromMin) {
        fromMin = i;
        fromMax = i + 1;
      }

      if (arr[fromMax] < arr[i] || !fromMax) {
        fromMax = i;
      }
    }
  }

  return arr.slice(fromMin, fromMax + 1).reduce((a, b) => a + b);
}

console.log(maximumSum([-1, 3, 4, -2, 5, -7])); // 10
console.log(maximumSum([4, -1, -2, 1, 3])); // 4
console.log(maximumSum([4, 1, 2, 3, 4])); // 10
