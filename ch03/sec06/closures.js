// node closures.js

'use strict'

console.log('// Says Goodbye in ten seconds')
setTimeout(() => console.log('Goodbye1'), 1000)

console.log('// Provide parameters for text and timer')
const sayLater = (text, when) => {
  let task = () => console.log(text)
  setTimeout(task, when)
}

console.log('// Two sample invocations')
sayLater('Hello2', 2000)
sayLater('Goodbye3', 3000)

console.log('// The value of the captured variable can be changed after the call')
let text = 'Goodbye4'
setTimeout(() => console.log(text), 4000)
text = 'Hello5'
