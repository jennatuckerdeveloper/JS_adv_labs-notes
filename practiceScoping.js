// const myTest = function () {
//   let toggle = true
//   return function () {
//     if (toggle) {
//       console.log('First run')
//       toggle = false
//     } else {
//       console.log('Second run')
//       toggle = true
//     }
//   }
// }

const myTest = function () {
  let count = 0
  return function () {
    if (count === 0) {
      console.log('First run')
      count += 1
    } else if (count === 1) {
      console.log('Second run')
      count += 1
    } else {
      console.log('Third run')
    }
  }
}

const trying = myTest()

trying()
trying()
trying()
