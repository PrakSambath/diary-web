'use strict';

import Button from '../components/button.js';
import Input from '../components/input.js';
import Textarea from '../components/textarea.js';
import AppText from './appText.js';
import ColorSelector from './color-selector.js';
import CRUD from './crud.js';
import User from './user.js';
export default class InputForm extends HTMLElement {
  constructor(){
    super();

    this.appText = new AppText();
    // input form element
    const addBtn = new Button('', 'button', 'show-form btn-secondary rounded');
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'grid');
    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'form-container');
    const form = document.createElement('form');
    form.className = 'input-form';
    const inputWrapper = document.createElement('div');
    inputWrapper.setAttribute('class', 'input-wrapper');
    const inputTitle = new Input('text', 'title', 'title', this.appText.string.title);
    const inputContent = new Textarea('content', 'content', this.appText.string.content);
    const inputDate = new Input('date', 'date', 'date');
    inputDate.valueAsDate = new Date();
    const colorSelector = new ColorSelector();
    const ctaWrapper = document.createElement('div');
    ctaWrapper.setAttribute('class', 'cta-wrapper');
    const createBtn = new Button(this.appText.string.create, 'button', 'btn-secondary rounded');

    // show/hide input form fields
    addBtn.addEventListener('click', ()=> {
      formContainer.classList.toggle('visible');
      addBtn.classList.toggle('closed');
    });

    // create diary
    createBtn.addEventListener('click', ()=> {
      this.validate(inputTitle, inputContent, inputDate, colorSelector);
    });

    // create input form layout
    inputWrapper.append(inputTitle, inputContent, inputDate, colorSelector);
    ctaWrapper.append(createBtn);
    form.append(inputWrapper, ctaWrapper);
    formContainer.append(form);
    wrapper.append(addBtn, formContainer);
    this.append(wrapper);

  }

  validate(title, content, date, color){
    const titleValue = title.getValue();
    const contentValue = content.getValue();
    const dateValue = date.getValue();
    const colorValue = color.getValue();
    if(titleValue && contentValue && dateValue && colorValue){
      const crud = new CRUD(new User().userName);
      crud.createEntry(titleValue, contentValue, dateValue, colorValue);
      // reload browser to update view
      location.reload(true);
    }
  }
}
window.customElements.define('input-form', InputForm);