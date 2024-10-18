// Import Modules
import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';
import { combine } from './combine.js';

// Math Modules
console.log(add(12, 12));
console.log(subtract(12, 4));
console.log(multiply(4, 6));

// String Modules
console.log(toUpperCase('good morning sir'));
console.log(toLowerCase('GOOD MORNING SIR'));

// Array Modules
console.log('Max: ', findMax([1, 2, 3, 4, 5]));
console.log('Reversed: ', reverseArray([1, 2, 3]));

// Combine Functions Across Modules
addAndLogUpper(10, 20);

// Final Challenge
console.log(combine());