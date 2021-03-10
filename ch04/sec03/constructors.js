// node constructors.js

'use strict'

console.log('// Constructor function initializes object')
// Function must be uppercase. Otherwise 'new' won't work!!!
function Employee(name, salary) {
  this.name = name
  this.salary = salary
}

// dummy function also has properties prototype and [[Prototype]].
// In Chrome [[Prototype]] (from the Javascript spec) is called __prototype__
// In 'prototype' you'll find the 'constructor' method.
function dummy(name, salary) {
  console.log(name, salary)
}

// Employee and dummy are both Function objects with properties prototype
// and __prototype__.

console.log('// Calling dummy')
dummy('Harry', 90000)

console.log('// Invoke constructor function with new')
const harry = new Employee('Harry Smith', 90000)
console.log('harry:', harry) // Employee { name: 'Harry Smith', salary: 90000 }

console.log('// Shared methods are attached to the constructor’s prototype')
// You can directly change the 'prototype' property. Object.setPrototypeOf()
// is not needed! Object.setPrototypeOf() uses [[Prototype]] aka. __prototype__.
// harry.__proto__ points to Employee.prototype !!!
Employee.prototype.raiseSalary = function(percent) {
  this.salary *= 1 + percent / 100
}

harry.raiseSalary(5)
console.log('harry:', harry) // Employee { name: 'Harry Smith', salary: 94500 }
const sameMethod = harry.raiseSalary === Employee.prototype.raiseSalary
console.log('sameMethod:', sameMethod) // true
