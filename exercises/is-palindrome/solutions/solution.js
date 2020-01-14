function isPalindrome(str) {
  return str.replace(/\s|[^\w]/g, '')
            .split('')
            .every((letter, index, array) => {
              return letter === array[(array.length - 1) - index]
            })
}