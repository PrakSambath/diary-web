import Button from "../components/button.js";
import Input from "../components/input.js";
import Textarea from "../components/textarea.js";

export default class Entry{

  constructor(id, title, content, date, themeColor, onUpdate, onDelete) {
    
    const ANIMATE_DURATION = 300; // 200ms
    // card container
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'card secondary');
    wrapper.style.backgroundColor = themeColor;

    // view layout
    const viewElem = document.createElement('div');
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
        <button type="button" class="edit-btn btn-secondary rounded">Edit</button>
        <button type="button" class="delete-btn btn-secondary rounded">Delete</button>
      </div>
      </div>
      `;

    // show edit layout
    viewElem.querySelector('.edit-btn').addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        viewElem.style.display = 'none';
        editElem.style.display = 'block';
        wrapper.style.transform = '';
      },ANIMATE_DURATION);
    });
    // delete diary
    viewElem.querySelector('.delete-btn').addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        onDelete(id);
        // reload browser to update view
        location.reload(true);
      },ANIMATE_DURATION);
    });

    // edit layout
    const editElem = document.createElement('form');
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
        <button type="button" class="update-btn btn-secondary rounded">Update</button>
        <button type="button" class="cancel-btn btn-secondary rounded">Cancel</button>
      </div>
      </div>
      `;
      editElem.querySelector('.title').replaceWith(inputTitle);
      editElem.querySelector('.content').replaceWith(inputContent);
      editElem.querySelector('.date').replaceWith(inputDate);
    // update diary
    editElem.querySelector('.update-btn').addEventListener('click', () => {
      const newTitle = inputTitle.getValue();
      const newContent = inputContent.getValue();
      const newDate = inputDate.getValue();
      if(newTitle && newContent && newDate){
        wrapper.style.transform = 'rotateY(90deg)';
        setTimeout(() => {
          editElem.style.display = 'none';
          viewElem.style.display = 'block';
          wrapper.style.transform = '';
          onUpdate(id, newTitle, newContent, newDate, themeColor);
          // reload browser to update view
          location.reload(true);
        },ANIMATE_DURATION);
      }
    });
    // close edit layout
    editElem.querySelector('.cancel-btn').addEventListener('click', () => {
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
}