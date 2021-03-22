/*

  From an array of strings, find the length of longest string
  
  ['a','ab'] => 2
  
*/

const fn = (arr) => arr.reduce(
  (acc, str) => Math.max(acc, str.length), 
  0
)
