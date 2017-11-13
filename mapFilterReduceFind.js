const myList = [1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9, 10]

const find = function (numList) {
  return numList.find(function (num, index, array) { return num % 2 === 0 })
}

console.log(find(myList))

const findIndex = function (numList) {
  return numList.findIndex(num => num % 2 === 0)
}

console.log(findIndex(myList))

const filter = function (numList) {
  return numList.filter(function (num, index, array) { return index % 2 === 0 })
}

// The filter method takes out all of the evens here.  It takes out what is true.

console.log(filter(myList))

const reduce = function (numList) {
  return numList.reduce(function (total, i, index, list) { return total + i })
}

console.log(reduce(myList))

const combo = function (numList) {
  return numList
    .filter(function (num, index, array) { return index % 2 === 0 })
    .reduce(function (total, i, index, list) { return total + i })
}

console.log(combo(myList))

const map = function (numList) {
  return numList.map(function (i, index, list) {
    if (i % 2 === 0) { return i } else { return i * 10 }
  })
}

console.log(map(myList))

const mapWithTurnary = function (numList) {
  return numList.map(function (i, index, list) { return i % 2 === 0 ? i : i * 10 })
}

console.log(mapWithTurnary(myList))

const stringList = ['the', 'cat', 'in', 'the', 'hat']

const mapStrings = function (stringList) {
  return stringList.map(string => string + 'ay!')
}
console.log(mapStrings(stringList))

const nestedMapStrings = function (stringList) {
  return stringList.map(string => string.split('').map(letter => letter + 'a').join(''))
}
console.log(nestedMapStrings(stringList))
