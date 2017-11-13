let Stack = function () {
  this.count = 0
  this.storage = {}
}

Stack.prototype.add = function (value) {
  this.storage[this.count] = value
  this.count++
}

Stack.prototype.remove = function () {
  if (this.count === 0) {
    return undefined
  }
  this.count--
  let result = this.storage[this.count]
  delete this.storage[this.count]
  return result
}

// const myStack = new Stack()
// myStack.push('The')
// myStack.push('Cat')
// myStack.push('In')
// myStack.push('The')
// myStack.push('Hat')

// console.log('First pull')
// console.log(myStack.pop())
// console.log('Second pull')
// console.log(myStack.pop())
// console.log('Third pull')
// console.log(myStack.pop())
// console.log('Fourth pull')
// console.log(myStack.pop())
// console.log('Fifth pull')
// console.log(myStack.pop())
// console.log('Sixth pull')
// console.log(myStack.pop())

const machine = function (input) {
  let innerStack = new Stack()
  for (let i of input) {
    if (i === '+') {
      let toAddOne = innerStack.remove()
      let toAddTwo = innerStack.remove()
      let sum = toAddOne + toAddTwo
      innerStack.add(sum)
    } else if (i === '*') {
      let toMultiplyOne = innerStack.remove()
      let toMultiplyTwo = innerStack.remove()
      let sum = toMultiplyOne * toMultiplyTwo
      innerStack.add(sum)
    } else {
      let x = parseInt(i)
      innerStack.add(x)
    }
    // console.log(innerStack.storage)
  } return innerStack.remove()
}

console.log(machine('13+62*7+*'))
