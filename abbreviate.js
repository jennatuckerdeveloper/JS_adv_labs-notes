/*
Abbreviate!

The word i18n is a common abbreviation of internationalization the developer community use instead of typing 
the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater 
into an abbreviation following the same rules.

Notes:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") 
will split up a series of letters into two words (eg. "elephant" and "ride").

The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter 
(eg. "elephant ride" => "e6t r2e").
Example:

abbreviate("elephant-rides are really fun!")

Output:

"e6t-r3s are r4y fun!"
*/

const abbreviate = function (str) {
  let separatedString = str.split(/[\s-]/)
  let noPunc = []
  let newString = []
  for (let word of separatedString) {
    let lenWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    noPunc.push(lenWord)
    let innerNum = lenWord.length - 2
    if (innerNum > 1) {
      let coded = word[0] + innerNum.toString() + word[lenWord.length - 1]
      newString.push(coded)
    } else {
      newString.push(lenWord)
    }
  } console.log(newString)
}

// abbreviate('elephant-rides are really fun!')
// abbreviate('elephant-rides are really fantastic!')
// abbreviate('accessibility')
// abbreviate('internationalization')

function punctuatedWords (word) {
  if (word.length > 4) {
    const innerNum = word.length - 3
    const newWord = word[0] + innerNum.toString() + word[word.length - 2] + word[word.length - 1]
    return newWord
  } else {
    return word
  }
}
function hyphenatedWords (word) {
  const toReturnList = []
  const sepWords = word.split('-')
  for (word of sepWords) {
    if (word.length > 3) {
      const innerNum = word.length - 2
      toReturnList.push(word[0] + innerNum.toString() + word[word.length - 1])
    } else {
      toReturnList.push(word)
    }
  } return toReturnList.join('-')
}

const abbreviate2 = function (str) {
  const splitWords = str.split(' ')
  const toReturn = []
  for (let word of splitWords) {
    if (word.includes('-')) {
      toReturn.push(hyphenatedWords(word))
    } else if (word.includes('.') || word.includes('?') || word.includes('!')) {
      toReturn.push(punctuatedWords(word))
    } else {
      if (word.length > 3) {
        const innerNum = word.length - 2
        toReturn.push(word[0] + innerNum.toString() + word[word.length - 1])
      } else {
        toReturn.push(word)
      }
    }
  } return toReturn.join(' ')
}
console.log(abbreviate2('elephant-rides are really fun!'))
console.log(abbreviate2('elephant-rides are really fantastic!'))

// Nick's version 
// const abbreviateSentence = (str) => {
//   str = str.split(' ')
//   let words = []
//   for (let word of str) {
//     words.push(abbreviateWord(word))
//   }
//   return words.join(' ')
// }

// const abbreviateWord = (str) => {
//   let punc = ''
//   if ('!?.,'.includes(str[str.length - 1])) {
//     punc = str[str.length - 1]
//     str = str.slice(0, str.length - 1)
//   }

//   if (str.includes('-')) {
//     const words = str.split('-')
//     return abbreviateWord(words[0]) + '-' + abbreviateWord(words[1]) + punc
//   } else if (str.length > 3) {
//     return str[0] + (str.length - 2) + str[str.length - 1] + punc
//   } else {
//     return str + punc
//   }
// }

// console.log(abbreviateSentence('elephant-rides are really fun!'))
