import Button from "../components/button.js";
import Input from "../components/input.js";
import Textarea from "../components/textarea.js";
import { createEntry } from "./crud.js";
export default class Form extends HTMLElement {
  constructor(){
    super();

    const addBtn = new Button('+', 'button', 'show-form btn-primary');
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
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
    const ctaWrapper = document.createElement('div');
    ctaWrapper.setAttribute('class', 'cta-wrapper');
    const subBtn = new Button('Create', 'button', 'btn-primary');


    addBtn.addEventListener('click', ()=> {
      formContainer.classList.toggle('visible');
      if(addBtn.textContent == '+'){
        addBtn.textContent = '−';
      }else{
        addBtn.textContent = '+';
      }
    })

    subBtn.addEventListener('click', ()=> {
      this.formHandler(form, inputTitle.value, inputContent.value, inputDate.value);
    });

    inputWrapper.append(inputTitle, inputContent, inputDate);
    ctaWrapper.append(subBtn);
    form.append(inputWrapper, ctaWrapper);
    formContainer.append(form);
    wrapper.append(addBtn, formContainer);
    container.append(wrapper);
    this.append(container);

  }

  formHandler(form, title, content, date){
    if(title && content && date){
      createEntry(title, content, date);
      // reload browser to update view
      location.reload(true);
    }else{
      alert('Please enter all fields!');
    };

  }
}
window.customElements.define('input-form', Form);



