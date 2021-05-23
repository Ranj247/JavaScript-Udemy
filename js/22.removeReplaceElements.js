// // REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
// console.log(firstLi);
const link = firstLi.children[0];
// a element
// console.log(link);

let val;

// Classes
val = link.className;
// console.log(val);
val = link.classList;
// console.log(val);
val = link.classList[0];
// console.log(val);
link.classList.add('test');
// val = link;
// console.log(val);
link.classList.remove('test');
val = link;

// // Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
// console.log(val);
link.removeAttribute('title');
val = link;

console.log(val);

