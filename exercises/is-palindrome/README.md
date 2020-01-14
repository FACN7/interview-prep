# Is Palindrome

## Task

Write a function that takes in a string containing a word or sentence Eg: `"abba"`

Your function should check whether the string contains a palindrome (ie: is the word or sentence spelt the same forwards and backwards), and return `true` or `false`. You should ignore any spaces, punctuation or capital letters Eg:

```javascript
isPalindrome("abba") // returns true
isPalindrome("Anna") // returns true
isPalindrome("kayak") // returns true
isPalindrome("I did, did I?") // returns true
isPalindrome("Don't nod") // returns true
isPalindrome("Eva, can I see bees in a cave?") // returns true

isPalindrome("") // returns false
isPalindrome("dog") // returns false
isPalindrome("falafel") // returns false
isPalindrome("coding is fun!") // returns false
isPalindrome("trust me, it's magic") // returns false
isPalindrome("everything is cool...in Nazareth") // returns false
```

**Note: You are not allowed to use [`Array.prototype.reverse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) for this challenge.**

You will need to:
- Create a node project
- Write tests to prove your code works

You should aim for an `O(n)` execution time
