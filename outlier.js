/*
Find the Parity Outlier

An array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Given this array (which will have a length of at least 3, but could be very large) write a method that takes the array as an argument and returns N.

For example:

> outlier([2, 4, 0, 100, 4, 11, 2602, 36])
> 11

> outlier([160, 3, 1719, 19, 11, 13, -21])
> 160
*/

const oddOrEvenList = function (numList) {
  // true iseven and false is odd 
  let numEven = 0
  let numOdd = 0
  for (let num of numList) {
    if (num % 2 === 0) {
      numEven += 1
    } else if (num % 2 !== 0) {
      numOdd += 1
    }
  } if (numEven > 1) {
    return true
  } else if (numOdd > 1) {
    return false
  }
}

// console.log(oddOrEvenList([2, 4, 0, 100, 4, 11, 2602, 36]))
// console.log(oddOrEvenList([160, 3, 1719, 19, 11, 13, -21]))

const outlier = function (numList) {
  const compare = oddOrEvenList(numList)
  for (let num of numList) {
    if ((num % 2 === 0) !== compare) {
      return [num, numList.indexOf(num)]
    }
  }
}

// console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
// console.log(outlier([160, 3, 1719, 19, 11, 13, -21]))

const newOutlier = function (numList) {
  // figure out if it's an odd or even list
  // scan list to find the one that does not match 
  const odds = numList.filter(num => num % 2 === 0)
  const evens = numList.length - odds
  const toFind = odds > evens ? 0 : 1
  const outlier = numList.find(num => num % 2 === toFind)
  return outlier
}

console.log(newOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(newOutlier([160, 3, 1719, 19, 11, 13, -21]))
