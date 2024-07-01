import Button from "../components/button.js";
import { updateEntry, deleteEntry } from "./crud.js";

export default class Entry{

  constructor(id, title, content, date) {
    
    // card container
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'card');

    // view layout
    const viewElem = document.createElement('div');
    viewElem.setAttribute('id', 'view');
    viewElem.innerHTML =`
    <div id="view">
      <div class="text-content">
        <h2 class="title">${title}</h2>
        <p class="content">${content}</p>
        <div class="date">
          <span>${date}</span>
        </div>
      </div>
      <div class="cta-link">
        <button id="edit-btn" type="button" class="btn-primary">Edit</button>
        <button id="delete-btn" type="button" class="btn-primary">Delete</button>
      </div>
    </div>`;

    // edit button
    viewElem.querySelector('#edit-btn').addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        viewElem.style.display = 'none';
        editElem.style.display = 'block';
        wrapper.style.transform = 'rotateY(0deg)';
      },500);
    });
    // delete button
    viewElem.querySelector('#delete-btn').addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        this.onDelete(id)
      },500);
    });

    // edit layout
    const editElem = document.createElement('div');
    editElem.setAttribute('id', 'edit');
    editElem.innerHTML = `
    <form id="edit">
      <div class="text-content">
        <input type="text" class="title" name="title" value="${title}"/>
        <textarea class="content" name="content">${content}</textarea>
        <div class="date">
          <input type="date" class="date" name="date" value="${date}"/>
        </div>
      </div>
      <div class="cta-link">
        <button id="update-btn" type="button" class="btn-primary">Update</button>
        <button id="cancel-btn" type="button" class="btn-primary">Cancel</button>
      </div>
    </form>`;
    // update button
    editElem.querySelector('#update-btn').addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        editElem.style.display = 'none';
        viewElem.style.display = 'block';
        wrapper.style.transform = 'rotateY(0deg)';
        const newTitle = editElem.querySelector('form input.title').value;
        const newContent = editElem.querySelector('form textarea.content').value;
        const newDate = editElem.querySelector('form input.date').value;
        this.onUpdate(id, newTitle, newContent, newDate);
      },500);
    });
    // cancel button
    editElem.querySelector('#cancel-btn').addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        editElem.style.display = 'none';
        viewElem.style.display = 'block';
        wrapper.style.transform = 'rotateY(0deg)';
      },500);
    });

    // hide edit layout by default
    editElem.style.display = 'none';

    // return view
    wrapper.append(viewElem, editElem);
    return wrapper;
  }

  onUpdate(id, title, content, date){
    updateEntry(id, title, content, date);
    // reload browser to update view
    location.reload(true);
  }

  onDelete(id){
    deleteEntry(id);
    // reload browser to update view
    location.reload(true);
  }
}