// node catch.js

'use strict'

console.log('// Catching exceptions')
let input = 
'{name: "Fred"}'
 // Read input from somewhere
try {
  let data = JSON.parse(input)
  // If execution continues here, input is valid
  // Process data 
  console.log({data})
} catch (e){
  // Just playing around.
  // In Javascript we don't do micromanagement when errors happen.
  if(e instanceof SyntaxError) {
    console.error(e.message)
  } else {
    console.error(`${input} invalid`)
  }
}
