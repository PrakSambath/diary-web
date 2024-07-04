'use strict';

export default class Textarea {
  constructor(name = '', className = '', placeholder = ''){
    const textarea = document.createElement('textarea');
    textarea.name = name;
    textarea.className = className;
    textarea.placeholder = placeholder;
    textarea.getValue = () => {return this.getValue(textarea)};
    textarea.addEventListener('input', (event) => {
      this.validate(event.currentTarget);
    });
    return textarea;
  }

  getValue(target){
    this.validate(target);
    return target.value.trim();
  }

  validate(target){
    if(target.value == ''){
      target.classList.add('warning');
    }else{
      target.classList.remove('warning');
    }
  }
}