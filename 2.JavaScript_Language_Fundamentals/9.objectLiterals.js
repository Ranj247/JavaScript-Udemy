// object literal definition
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  // nameless function
  getBirthYear: function(){
    return 2017 - this.age;
  }
}

let val;

val = person;

// // Get specific value
// recommended usage person.firstName
val = person.firstName;
// val = person['lastName'];
val = person.age;
val = person.hobbies[1];
// recommended sytax of getting object value
val = person.address.state;
// the other sytax of getting object value
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}