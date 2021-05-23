// // Set local storage item
// localStorage.setItem('Ranjeet','Singh'); 
// localStorage.setItem('Renata','Tanai');

// // Set session storage item
// sessionStorage.setItem('Naas','Kildare');

// // Remove from storage
// localStorage.removeItem('Renata');

// // Get from storage
// let a = localStorage.getItem('Ranjeet');
// console.log(a);

// // Clear from storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value  

  let tasks;

  if(localStorage.getItem('tasks') === null){
    // if tasks key has null value, then make tasks empty Array
    tasks = [];
  } else {
    // if tasks key has value, then assign the value to tasks variable
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // push the form input value to tasks variable
  tasks.push(task);

  // set 'tasks' key value to be from the tasks variable
  // JSON.stringify() takes a JavaScript object and transforms it into a JSON string.
  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();

});

// JSON. parse() takes a JSON string and transforms it into a JavaScript object.
const tasks = JSON.parse(localStorage.getItem('tasks'));

console.log(tasks);

// tasks.forEach(function(task){
//   console.log(task);
// });