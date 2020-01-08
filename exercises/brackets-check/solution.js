// No peeking until you've tried it yourself!!

// This solution uses a Stack data structure

const bracketsCheck = str => {
  // create a lookup object to map open-bracket to correct close-bracket
  const lookup = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  // create an empty array (ie: a `stack` data structure)
  const closingBracketStack = []

  // split the string into an array of characters
  // loop over the array with .every()
  // this will return true, if you return true for every element in the array
  // otherwise it returns false
  const result = str.split('').every(bracket => {
    // check if bracket exists in lookup table
    // this will tell you if bracket is an open-bracket
    if (lookup[bracket]) {
      // if it is an open-bracket, push the corresponding close-bracket onto the stack      
      closingBracketStack.push(lookup[bracket])
      // return true as we haven't found a mismatch yet  
      return true
    }

    // if bracket is not in lookup, it must be a closing-bracket
    // we compare it to the last closing-bracket in the stack
    // if they are not the same, we have found a mismatch
    return bracket === closingBracketStack.pop()
  })

  // If there are any closing brackets left in the stack, the string must be invalid
  // eg: '{}[[' wouldn't be valid
  if (closingBracketStack.length > 0) {
    return false
  }

  return result
}

module.exports = bracketsCheck
