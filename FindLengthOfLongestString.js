/*

  From an array of strings, find the length of longest string
  
  ['a','ab'] => 2
  
*/

const fn = (arr) => arr.reduce(
  (acc, s) => Math.max(acc, s.length), 
  0
)
