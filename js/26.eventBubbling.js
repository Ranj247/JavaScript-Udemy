// // EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// // EVENT DELGATION

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

// // Event listener can be applied on the body so all clicks and be recorded
// // And specific selection can be applied in the function using if statement
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // // Not that ideal as all class names need to be matched
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  // // Ideal as it match only the class specified 
  // // And specific selection can be applied in the function using if statement
  // // contains() method
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    // // delete-class belongs to a tag only but we need to select the 
    // // parent also which is the li tag, so the list can be deleted
    e.target.parentElement.parentElement.remove();
  }
}