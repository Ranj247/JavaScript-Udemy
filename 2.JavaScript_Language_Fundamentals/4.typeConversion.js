let val;

// toString() method
// Number to string
val = String(555);

val = (555).toString();
val = (4+4).toString();
// Bool to string
val = (true).toString();
// Date to string
val = (new Date()).toString();
// Array to string
val = ([1,2,3,4]).toString();

// String to number
val = Number('5');
// Boolean to number
val = Number(true);
val = Number(false);

val = Number(null);
// character string to number is not possible as NaN 
val = Number('hello');
// Array to number not possible as NaN
val = Number([1,2,3]);

// parseInt() method only shows intergars without decimals
val = parseInt('100.30');
// parseFloat() method shows upto one decimals
// console.log(val.toFixed(2)) will show two decimals // 100.30
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
//console.log(val.length);
// console.log(val.toFixed(2));

// Type cohersion
const val1 = String(5); 
const val2 = 6;         

// val1 is a string value
// val2 is number value

// const sum = val1 + val2; // output is 56 which is a string value

// initially output 56 was a string value
// Number() method converted string value to number value
const sum = Number(val1 + val2); 

console.log(sum);
console.log(typeof sum);
