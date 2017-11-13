/* Debounce
Write a function that accepts a function and timeout, x, in number of milliseconds. 

It will return a new function that can only be executed once per timeout period — 
and if the function is invoked during the timeout period, the timeout period restarts. 

This is useful for functions that need to be blocked on subsequent attempts over short period of times. 
One such is example is if a user clicks on a button.

Once written, add a third parameter that will allow the function to be executed immediately if set to true. 
Otherwise the function will run at the end of the timeout period.
*/

// const debounce = function (callback, x) {
//   setTimeout(function () {
//     const who = 'World!'
//     console.log(callback(who))
//   }, x)
//   const returnFunction = function () { console.log('woah') }
//   return returnFunction
// }

// const newFunc = debounce(passed => 'Hello ' + passed, 1000)
// newFunc()
// newFunc()
// newFunc()

const debounce2 = function (fn, timer) {
  let running = false
  return function (arg) {
    if (!running) {
      running = true
      setTimeout(function () {
        fn(arg)
        running = false
      }, timer)
    } else {
    }
  }
}

const debounce = (fn, timeout) => {
  let running = false
  return (arg) => {
    if (!running) {
      running = true
      setTimeout(() => {
        fn(arg)
        running = false
      }, timeout)
    } else {
      console.log('call ignored')
    }
  }
}

const testfn = (str) => {
  console.log(str)
}

const debouncedFn = debounce2(testfn, 100)
// debounce2(testfn, 100)
// debounce2(testfn, 100) // These three calls don't work, because the function is not stored in memory, so running = false each call.
// debounce2(testfn, 100)
debouncedFn('HELLO!')
debouncedFn('HELLO!')
debouncedFn('HELLO!')

setTimeout(() => debouncedFn('HELLO!'), 2000)
