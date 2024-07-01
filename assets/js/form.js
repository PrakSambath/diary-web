import Button from "../components/button.js";
import Input from "../components/input.js";
import Textarea from "../components/textarea.js";
import ColorSelector from "./color-selector.js";
import { createEntry } from "./crud.js";
export default class Form extends HTMLElement {
  constructor(){
    super();

    const addBtn = new Button('+', 'button', 'show-form btn-secondary');
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'grid');
    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'form-container');
    const form = document.createElement('form');
    const inputWrapper = document.createElement('div');
    inputWrapper.setAttribute('class', 'input-wrapper');
    const inputTitle = new Input('text', 'title', 'title');
    const inputContent = new Textarea('content', 'content');
    const inputDate = new Input('date', 'date', 'date');
    inputDate.valueAsDate = new Date();
    const colorSelector = new ColorSelector();
    const ctaWrapper = document.createElement('div');
    ctaWrapper.setAttribute('class', 'cta-wrapper');
    const subBtn = new Button('Create', 'button', 'btn-secondary');


    addBtn.addEventListener('click', ()=> {
      formContainer.classList.toggle('visible');
      if(addBtn.textContent == '+'){
        addBtn.textContent = '−';
      }else{
        addBtn.textContent = '+';
      }
    })

    subBtn.addEventListener('click', ()=> {
      this.validate(inputTitle, inputContent, inputDate, colorSelector);
    });

    inputWrapper.append(inputTitle, inputContent, inputDate, colorSelector);
    ctaWrapper.append(subBtn);
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
      createEntry(titleValue, contentValue, dateValue, colorValue);
      // reload browser to update view
      location.reload(true);
    }
  }
}
window.customElements.define('input-form', Form);



