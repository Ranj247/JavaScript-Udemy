// Create some arrays
// array of numbers
const numbers = [43,56,33,23,44,36,5];
// other style of creating array, but not that often used
const numbers2 = new Array(22,45,33,76,54);
// array of strings
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// array of mixed data types
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
// console.log(mixed);

let val;

// // Get array length
// val = numbers.length;
// // Check if is array using isArray() method
// val = Array.isArray(numbers);
// // Get single value from index 3
// val = numbers[3];
// // Get single value from index 0
// val = numbers[0];
// // Insert into array at index 2
// numbers[2] = 100;
// // Find index of value using indexof() method
// val = numbers.indexOf(36);

// MUTATING ARRAYS using push() method
// // Add on to end
// numbers.push(250);
// // Add on to front using unshift() method
// numbers.unshift(120);
// // Take off from end using pop() method
// numbers.pop();
// // Take off from front using shift() method
// numbers.shift();
// // Splice (cut) values using splice() method
// // // starting at index 1 and up to index 3
// numbers.splice(1,3);
// // Reverse the arrays using reverse() method
// numbers.reverse();

// Concatenate array
// val = numbers.concat(numbers2);

// Sorting arrays using sort() method
// val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function" to sort the numbers
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort
// // Use the "compare function" to reverse sort the numbers
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find number under 50
// // find() method chooses the first number it sees in Array and returns
// function under50 (num) {
//   return num < 50;
// }
// val = numbers.find(under50);

// // Find number over 50
// // find() method chooses the first number it sees in Array and returns
function over50(num){
  return num > 50;
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);
