# Brackets Check

## Task

Write a function that takes in a string containing different types of brackets. Eg: `'({[]})'`

Your function should check whether the brackets open and close in a valid order, and return `true` or `false`. Eg:

```javascript
bracketsCheck('()') // returns true
bracketsCheck('([])') // returns true
bracketsCheck('(){}') // returns true
bracketsCheck('(){}[]') // returns true
bracketsCheck('({[]})') // returns true

bracketsCheck('') // returns false
bracketsCheck('(') // returns false
bracketsCheck('(){') // returns false
bracketsCheck('}}()') // returns false
bracketsCheck('([)]') // returns false
bracketsCheck('({[})') // returns false
```

You will need to:
- Create a node project
- Write tests to prove your code works
- Use `console.time()` and `console.endTime()` to measure the execution time of your code (see docs [here](https://nodejs.org/api/console.html#console_console_time_label)) 
