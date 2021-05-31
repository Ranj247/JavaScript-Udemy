// Create element
const li  = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');


// // // Create text node and append
// // Version 1
// let textNodeVar = document.createTextNode('Hello World');
// li.appendChild(textNodeVar);
// // Version 2
li.appendChild(document.createTextNode('Hello World'));

// // Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// // Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);