/*
  
  Source: https://bigfrontend.dev/problem/implement-lodash-chunk

  Split an array into chunks of given size
  
  [1,2,3,4,5], 2 => [[1, 2], [3, 4], [5]]

*/

const chunk = (items, size) => {

  if (!size || ! items) return []

  const res = items.reduce((acc, val) => {
    if (acc.length === 0 || acc[acc.length-1].length === size) {
      acc.push([])
    }
    acc[acc.length-1].push(val)
    return acc
  }, [])

  return res
}
