const name = 'Raj';
const age = 35;
const address = 'Arches';
const country = 'Ireland';
const city = 'Kildare';
const town = 'Naas';

let html;


function hello(){
  return 'hello';
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Address: ${address}</li>
    <li>County: ${city}</li>
    <li>Town: ${town}</li>
    <li>Country: ${country}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
  </ul>       
`

document.body.innerHTML = html;