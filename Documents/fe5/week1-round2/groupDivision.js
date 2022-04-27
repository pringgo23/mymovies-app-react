/**
 * 
    A university has admitted a group of n students with varying skill levels. To better accommodate the students, the university has decided to create classes tailored to the skill levels. A placement examination will return a skill level that will be used to group the students, where levels[i] represents the skill level of student i. All students within a group must have a skill level within maxSpread, a specified range of one another. Determine the minimum number of classes that must be formed.
      
    Example
    n = 5
    levels = [1, 4, 7, 3, 4]
    maxSpread = 2 

    The students in any group must be within maxSpread = 2 levels of each other. In this case, one optimal grouping is (1, 3), (4, 4), and (7). Another possible grouping is (1), (3, 4, 4), (7).  There is no way to form fewer than 3 groups.

    Function Description
    Complete the function groupDivision in the editor below.

    groupDivision has the following parameter(s):
        int levels[n]:  the skill level for each student
        int maxSpread:  the maximum allowed skill level difference between any two members of a group

    Returns
        int: the minimum number of groups that can be formed

    Constraints
    1 ≤ n ≤ 105
    1 ≤ levels[i] ≤ 109 for every i (where 0 ≤ i ≤ n-1)
    0 ≤ maxSpread ≤ 109
 * 
    [ 1, 3, 4, 4, 7 ]
    [1, 3] [4, 4] [7]
 */

function groupDivision(levels, maxSpread) {
  // Write your code here
  const levelsSort = levels.sort((a, b) => a - b);
  let group = 1;
  let firstLevel = levelsSort[0];

  for (let i = 1; i < levelsSort.length; i++) {
    if (levelsSort[i] - firstLevel > maxSpread) {
      group++;
      firstLevel = levelsSort[i];
    }
  }

  return group;
}

console.log(groupDivision([1, 4, 7, 3, 4], 2)); // 3
console.log(groupDivision([4, 8, 1, 7], 3)); // 2
console.log(groupDivision([4, 1, 2, 5, 3], 0)); // 5
