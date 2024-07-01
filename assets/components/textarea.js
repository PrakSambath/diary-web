export default class Textarea {
  constructor(name = '', className = ''){
    const textarea = document.createElement('textarea');
    textarea.setAttribute('name', name);
    textarea.setAttribute('class', className);
    textarea.getValue = () => {return this.getValue(textarea)};
    textarea.addEventListener('input', (event) => {
      this.validate(event.currentTarget);
    });
    return textarea;
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