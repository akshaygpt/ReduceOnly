/*

  Source: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
  
  Remove duplicates from a sorted array
  
  [1, 1, 2] => [1, 2]

*/

var removeDuplicates = nums => nums.reduce((acc, cur) => (!acc.length || cur !== acc[acc.length - 1]) ? [...acc, cur] : acc, [])
