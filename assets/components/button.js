export default class Button {
  constructor(text = 'Button', type = 'button', className = ''){
    const button = document.createElement('button');
    button.setAttribute('type', type);
    button.setAttribute('class', className);
    button.textContent = text;
    return button;
  }
}