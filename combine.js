import { findMax, reverseArray } from './arrayModule.js';
import multiply, { add, subtract } from './mathModule.js';

export function combine() {
  const max = findMax([2, 24, 8]);
  const mult = multiply(max, 5); 
  const result = mult.toString().toUpperCase(); 
  return result;
} 