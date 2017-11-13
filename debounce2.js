const debounce = function (fn, timer) {
  let stillRunning = false
  return function (arg) {
    if (!stillRunning) {
      stillRunning = true
      setTimeout(function () {
        fn(arg)
        stillRunning = false
      }, timer)
    } else {
      console.log('ignored call')
    }
  }
}

const callbackFunction = function (arg) { console.log(arg) }

const debouncing = debounce(callbackFunction, 1500)

debouncing('Woo!')
debouncing('Hoo!')
debouncing('Roo')

setTimeout(function () {
  debouncing('Loo!')
}, 2000)

const otherCallback = function (arg) { console.log('Two! ' + arg) }
const otherBounce = debounce(otherCallback, 2000)
otherBounce('Ha!')
otherBounce('Ra!')
otherBounce('Za!')
setTimeout(function () {
  otherBounce('Ya!')
}, 3000)

/*
I think there are two layers of trickines here:
1) You need to use a closure to toggle the running closure variable.
2) You need to call the same INSTANCE of the function to refence/change the same prviate variable.

A closure:  
1) A function that has a reference to a private variable.
2) Any function where you're using variable from outside the scope
of that function, aka above, higher nested 

Lexical scoping / static scoping - you can't call the variable
from outside the function, but you can do vice versa.
Opposite is dynamic scoping and makes public variables 
*/
