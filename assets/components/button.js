'use strict';

export default class Button {
  constructor(text = '', type = '', className = ''){
    const button = document.createElement('button');
    button.type = type;
    button.className = className;
    button.textContent = text;
    return button;
  }
}