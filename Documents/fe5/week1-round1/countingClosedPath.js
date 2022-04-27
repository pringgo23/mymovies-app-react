/** 
 
  Some numbers are formed with closed paths. The digits 0, 4, 6 and 9 each have 1 closed path, and 8 has 2.  None of the other numbers is formed with a closed path. Given a number, determine the total number of closed paths in all of its digits combined.

  Example
  number = 649578

  The digits with closed paths are 6, 4, 9 and 8.  The total number of closed paths is 1 + 1 + 1 + 2 = 5.

  Function Description 
  Complete the function closedPaths in the editor below.

  closedPaths has the following parameter(s):
      int number:  an integer

  Returns:
      int:  the number of closed paths in number

*/

function closedPaths(number) {
  // Write your code here
  let totalClosedPaths = 0;
  const numStr = String(number);

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] == 0 || numStr[i] == 4 || numStr[i] == 6 || numStr[i] == 9) {
      totalClosedPaths++;
    } else if (numStr[i] == 8) {
      totalClosedPaths += 2;
    }
  }

  return totalClosedPaths;
}

console.log(closedPaths(630)); // 2
console.log(closedPaths(1288)); // 4
console.log(closedPaths(1235)); // 0
console.log(closedPaths(12345678)); // 4
