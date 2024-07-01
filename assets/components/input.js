export default class Input {
  constructor(type = 'text', name = '', className = ''){
    this.input = document.createElement('input');
    this.input.setAttribute('type', type);
    this.input.setAttribute('name', name);
    this.input.setAttribute('class', className);
    return this.input;
  }

  getValue(){
    return this.input.value;
  }
}