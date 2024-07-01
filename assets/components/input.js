export default class Input {
  constructor(type = 'text', name = '', className = ''){
    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('class', className);
    input.getValue = () => {return this.getValue(input)};
    input.addEventListener('input', (event) => {
      this.validate(event.currentTarget);
    });
    return  input;
  }

  getValue(target){
    this.validate(target);
    return target.value;
  }

  validate(target){
    if(target.value == ''){
      target.classList.add('warning');
    }else{
      target.classList.remove('warning');
    }
  }
}