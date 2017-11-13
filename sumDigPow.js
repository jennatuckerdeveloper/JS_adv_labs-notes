/*
Take a Number And Sum Its Digits Raised To The Consecutive Powers And ...Eureka!!

The number 89 is the first integer with more than one digit that fulfills 
the property partially introduced in the title of this kata. 

What's the use of saying "Eureka"? Because this sum gives the same number.

In effect:

89 = 8^1 + 9^2
The next number in having this property is 135.

See this property again:

135 = 1^1 + 3^2 + 5^3
We need a function to collect these numbers, 
that may receive two integers a, b that defines the range [a, b] (inclusive) 
and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) ==> []
*/

const makeRangeList = function (num1, num2) {
  const rangeList = []
  for (let i = num1; i <= num2; i++) {
    rangeList.push(i)
  }
  return rangeList
}

const checkANumber = function (num) {
  const digList = []
  for (let i of num.toString()) {
    digList.push(parseInt(i))
  }
  return digList.reduce(function (accumulator, currentValue, currentIndex, currentList) {
    const newSum = (Math.pow(currentValue, currentIndex + 1))
    return accumulator + newSum
  }, 0)
}

const sumDigPow = function (a, b) {
  const toReturn = []
  const rangeList = makeRangeList(a, b)
  for (let num of rangeList) {
    if (num === checkANumber(num)) {
      toReturn.push(num)
    }
  } return toReturn
}
console.log(sumDigPow(1, 10))
console.log(sumDigPow(1, 100))
console.log(sumDigPow(90, 100))

/*
sumDigPow(1, 10) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9]
sumDigPow(1, 100) ==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
sumDigPow(90, 100) ==> []
*/

const getDigits = (num) => {
  let digitCount = Math.floor(Math.log10(num)) + 1
  let digits = []
  while (digitCount > 0) {
    digits.push(Math.floor(num / 10 ** (digitCount - 1)))
    num %= 10 ** (digitCount - 1)
    digitCount -= 1
  }
  return digits
}

const sumDigPowNick = (start, end) => {
  let output = []
  for (let i = start; i <= end; i++) {
    if (getDigits(i).reduce((total, value, index) => total + (value ** (index + 1)), 0) === i) {
      output.push(i)
    }
  }
  return output
}
