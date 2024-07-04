'use strict';

import Button from '../components/button.js';
import Input from '../components/input.js';
import Textarea from '../components/textarea.js';
import AppText from './appText.js';

export default class Entry{

  constructor(id, title, content, date, themeColor, onUpdate, onDelete) {
    
    this.appText = new AppText();
    const ANIMATE_DURATION = 300; // 200ms
    // card container
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'card secondary');
    wrapper.style.backgroundColor = themeColor;

    // view layout
    const viewLayout = document.createElement('form');
    viewLayout.innerHTML =`
      <div class="wrapper">
      <div class="text-content">
        <h2 class="title">${title}</h2>
        <p class="content">${content}</p>
        <span class="date">${date}</span>
      </div>
      <div class="cta-link">
      </div>
      </div>
      `;
    const editBtn = new Button(this.appText.string.edit, 'button', 'btn-secondary rounded');
    const delBtn = new Button(this.appText.string.delete, 'button', 'btn-secondary rounded');
    viewLayout.querySelector('.cta-link').append(editBtn, delBtn);

    // show edit layout
    editBtn.addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        viewLayout.style.display = 'none';
        editLayout.style.display = 'block';
        wrapper.style.transform = '';
      },ANIMATE_DURATION);
    });
    // delete diary
    delBtn.addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        onDelete(id);
        // reload browser to update view
        location.reload(true);
      },ANIMATE_DURATION);
    });

    // edit layout
    const editLayout = document.createElement('form');
    editLayout.innerHTML = `
    <div class="wrapper">
    <div class="text-content">
    </div>
    <div class="cta-link">
    </div>
    </div>
    `;
    const inputTitle = new Input('text', 'title', 'title', this.appText.string.title);
    inputTitle.value = title;
    const inputContent = new Textarea('content', 'content', this.appText.string.content);
    inputContent.value = content;
    const inputDate = new Input('date', 'date', 'date');
    inputDate.value = date;
    const updateBtn = new Button(this.appText.string.update, 'button', 'btn-secondary rounded');
    const cancelBtn = new Button(this.appText.string.cancel, 'button', 'btn-secondary rounded');
    editLayout.querySelector('.text-content').append(inputTitle, inputContent, inputDate);
    editLayout.querySelector('.cta-link').append(updateBtn, cancelBtn);

    // update diary
    updateBtn.addEventListener('click', () => {
      const newTitle = inputTitle.getValue();
      const newContent = inputContent.getValue();
      const newDate = inputDate.getValue();
      if(newTitle && newContent && newDate){
        wrapper.style.transform = 'rotateY(90deg)';
        setTimeout(() => {
          editLayout.style.display = 'none';
          viewLayout.style.display = 'block';
          wrapper.style.transform = '';
          onUpdate(id, newTitle, newContent, newDate, themeColor);
          // reload browser to update view
          location.reload(true);
        },ANIMATE_DURATION);
      }
    });
    // close edit layout
    cancelBtn.addEventListener('click', () => {
      wrapper.style.transform = 'rotateY(90deg)';
      setTimeout(() => {
        editLayout.style.display = 'none';
        viewLayout.style.display = 'block';
        wrapper.style.transform = '';
      },ANIMATE_DURATION);
    });

    // hide edit layout by default
    editLayout.style.display = 'none';

    // return view
    wrapper.append(viewLayout, editLayout);
    return wrapper;
  }
}