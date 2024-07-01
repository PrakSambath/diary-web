export default class Textarea {
  constructor(name = '', className = ''){
    this.textarea = document.createElement('textarea');
    this.textarea.setAttribute('name', name);
    this.textarea.setAttribute('class', className);
    return this.textarea;
  }

  getValue(){
    return this.textarea.value;
  }
}