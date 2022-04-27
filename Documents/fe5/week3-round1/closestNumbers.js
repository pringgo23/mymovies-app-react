/**
  Given an array of distinct integers, determine the minimum absolute difference between any two elements. Print all element pairs with that difference in ascending order.

  Example
  numbers = [6,2,4,10]
  The minimum absolute difference is 2 and the pairs with that difference are (2,4) and (4,6). When printing element pairs (i,j), they should be ordered ascending first by i and then by j.

  2 4
  4 6

  Function Description 
  Complete the function closestNumbers in the editor below.

  closestNumbers has the following parameter(s):
      int numbers[n]:  an array of integers

  Returns 
      NONE (artinya gapake return, cukup console.log aja)

  Prints 
      distinct element pairs that share the minimum absolute difference, displayed in ascending order with each pair separated by one space on a single line

  Constraints
  2 ≤ n ≤ 10^5
  -10^9 ≤ numbers[i] ≤ 10^9
*/

function closestNumbers(numbers) {
  // Write your code here
  numbers.sort((a, b) => a - b);

  let tempArr = [];
  let result = "";

  numbers.forEach((el, i) => {
    let tempObj = {
      num: [el, numbers[i + 1]],
      numDiff: Math.abs(el - numbers[i + 1]),
    };

    tempArr.push(tempObj);
  });

  tempArr
    .sort((a, b) => a.numDiff - b.numDiff)
    .filter((el) => el.numDiff == tempArr[0].numDiff)
    .forEach((el) => {
      result += el.num.join(" ") + "\n";
    });

  console.log(result);
}

closestNumbers([6, 2, 4, 10]);
//  2 4
//  4 6

console.log();
closestNumbers([4, 2, 1, 3]);
// 1 2
// 2 3
// 3 4

console.log();
closestNumbers([4, -2, -1, 3]);
// -2 -1
// 3 4

console.log();
closestNumbers([5, -9, -5, 9, 10, 12]);
