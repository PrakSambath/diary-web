import { createEntry } from "./crud.js";
const form = document.createElement('form');
form.innerHTML = `
<input type="text">
<input type="text">
<input type="date">
<button type="submit">add</button>`;
form.addEventListener('submit', ()=> {
  console.log('submit');
  createEntry();
});
document.querySelector('body').append(form);

[...document.querySelectorAll("input")].forEach((elem)=> {
  if (elem.getAttribute('type') == 'date'){
    elem.valueAsDate = new Date();
  }
});



