'use strict';

export default class Input {
  constructor(type = 'text', name = '', className = '', placeholder = ''){
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.className = className;
    input.placeholder = placeholder;
    input.getValue = () => {return this.getValue(input)};
    input.addEventListener('input', (event) => {
      this.validate(event.currentTarget);
    });
    return  input;
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