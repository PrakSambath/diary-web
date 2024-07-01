import Button from "../components/button.js";
import Input from "../components/input.js";
import Textarea from "../components/textarea.js";
import { updateEntry, deleteEntry } from "./crud.js";

export default class Entry{

  constructor(id, title, content, date) {
    
    const ANIMATE_DURATION = 300; // 200ms
    // card container
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'card secondary');

    // view layout
    const viewElem = document.createElement('div');
    viewElem.setAttribute('id', 'view');
    viewElem.innerHTML =`
      <div class="wrapper">
      <div class="text-content">
        <h2 class="title">${title}</h2>
        <p class="content">${content}</p>
        <div class="date">
          <span>${date}</span>
        </div>
      </div>
      <div class="cta-link">
        <button id="edit-btn" type="button" class="btn-secondary">Edit</button>
        <button id="delete-btn" type="button" class="btn-secondary">Delete</button>
      </div>
      </div>
      `;

    // edit button
    viewElem.querySelector('#edit-btn').addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        viewElem.style.display = 'none';
        editElem.style.display = 'block';
        wrapper.style.transform = '';
      },ANIMATE_DURATION);
    });
    // delete button
    viewElem.querySelector('#delete-btn').addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        this.onDelete(id)
      },ANIMATE_DURATION);
    });

    // edit layout
    const editElem = document.createElement('form');
    editElem.setAttribute('id', 'edit');
    const inputTitle = new Input('text', 'title', 'title');
    inputTitle.value = title;
    const inputContent = new Textarea('content', 'content');
    inputContent.value = content;
    const inputDate = new Input('date', 'date', 'date');
    inputDate.value = date;
    editElem.innerHTML = `
    <div class="wrapper">
      <div class="text-content">
        <input type="text" class="title" name="title"/>
        <textarea class="content" name="content"></textarea>
        <div>
          <input type="date" class="date" name="date"/>
        </div>
      </div>
      <div class="cta-link">
        <button id="update-btn" type="button" class="btn-secondary">Update</button>
        <button id="cancel-btn" type="button" class="btn-secondary">Cancel</button>
      </div>
      </div>
      `;
      editElem.querySelector('.title').replaceWith(inputTitle);
      editElem.querySelector('.content').replaceWith(inputContent);
      editElem.querySelector('.date').replaceWith(inputDate);
    // update button
    editElem.querySelector('#update-btn').addEventListener('click', () => {
      const newTitle = inputTitle.getValue();
      const newContent = inputContent.getValue();
      const newDate = inputDate.getValue();
      if(newTitle && newContent && newDate){
        wrapper.style.transform = 'rotateY(90deg)';
        setTimeout(() => {
          editElem.style.display = 'none';
          viewElem.style.display = 'block';
          wrapper.style.transform = '';
          this.onUpdate(id, newTitle, newContent, newDate);
        },ANIMATE_DURATION);
      }
    });
    // cancel button
    editElem.querySelector('#cancel-btn').addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        editElem.style.display = 'none';
        viewElem.style.display = 'block';
        wrapper.style.transform = '';
      },ANIMATE_DURATION);
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