// // document.getElementsByClassName

// // const items = document.getElementsByClassName('collection-item');
// //console.log(items);
// //console.log(items[0]);
// //items[0].style.color = 'red';
// //items[3].textContent = 'Hello';

// //const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// //console.log(listItems);

// // document.getElementsByTagName
let lis = document.getElementsByTagName('li');

// console.log(typeof lis);
// console.log(lis);
// console.log(lis[0]);

// lis[0].innerText = 'List 1';
// lis[1].innerText = 'List 2';
// lis[2].innerText = 'List 3';
// lis[3].innerText = 'List 4';
// lis[4].innerText = 'List 5';
// lis[0].style.color = 'red';
// lis[2].style.color = 'red';
// lis[4].style.color = 'red';


// Conver HTML Collection into array
lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li){
//   li.style.color = 'red';
// });

// lis.forEach(function(li){
//   li.innerText = 'Red List';
//   li.style.color = 'red';
// });

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);


// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}


console.log(items);
