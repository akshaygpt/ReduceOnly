/*

  Count the number of occurences of each character in a string
  
  abca => {a:2, b:1, c:1}

*/

const fn = (str) => {
  return str
    .split("")
    .reduce(
      (acc, char) => (
        acc[char] 
        ? { ...acc, [char]: acc[char] + 1 } 
        : { ...acc, [char]: 1 }),
      {}
    );
};
