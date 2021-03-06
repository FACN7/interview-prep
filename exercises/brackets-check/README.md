# Brackets Check

## Task

Write a function that takes in a string containing different types of brackets. Eg: `'({[]})'`

Your function should check whether the brackets open and close in a valid order, and return `true` or `false`. Eg:

```javascript
bracketsCheck("()") // returns true
bracketsCheck("([])") // returns true
bracketsCheck("(){}") // returns true
bracketsCheck("(){}[]") // returns true
bracketsCheck("({[]})") // returns true

bracketsCheck("") // returns false
bracketsCheck("(") // returns false
bracketsCheck("(){") // returns false
bracketsCheck("}}()") // returns false
bracketsCheck("([)]") // returns false
bracketsCheck("({[})") // returns false
```

You will need to:
- Create a node project
- Write tests to prove your code works

You should aim for an `O(n)` execution time

<details><summary>HINT (don't read straight away)</summary>
<p>
A <a href="https://www.geeksforgeeks.org/stack-data-structure/">Stack data structure</a> could be helpful to avoid a nested loop...
</p>
</details>
