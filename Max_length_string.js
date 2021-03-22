/*

  From an array of strings, find the string with maximum length
  
  ['a','ab'] => 2
  
*/

const fn = (arr) => arr.reduce((acc, s) => Math.max(acc, s.length), 0)
