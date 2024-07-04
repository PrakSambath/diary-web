'use strict';

import colors from '../data/colors.js';

export default class ColorSelector extends HTMLElement{
  constructor(){
    super();


    // select first color as default
    this.selectedColor = colors[0].colorCode;
    let prevSelected = null;
    const shadow = this.attachShadow({'mode': 'closed'});
    const wrapper = document.createElement('ul');
    wrapper.setAttribute('class', 'color-selector');
    // color items
    colors.forEach(( elem, index) => {
      const colorElem = document.createElement('li');
      colorElem.setAttribute('class', 'color-item');
      // set color items style
      colorElem.style.backgroundColor = elem.colorCode;
      if(prevSelected == null){
        prevSelected = colorElem;
      }
      if(elem.colorCode == this.selectedColor){
        colorElem.classList.add('selected');
      }
      // select a color
      colorElem.addEventListener('click', (event) => {
        this.selectedColor = elem.colorCode;
        prevSelected.classList.remove('selected');
        event.currentTarget.classList.add('selected')
        prevSelected = event.currentTarget;
      });
      wrapper.append(colorElem);
    });

    this.getValue = () => {return this.selectedColor};

    // component style
    const style = document.createElement('style');
    style.innerHTML = `
    .color-selector {
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: center;
      padding: 0px;
      list-style: none;
    }

    .color-item {
      border-radius: 32px;
      width: 24px;
      height: 24px;
      box-sizing: border-box;
      cursor: pointer;
      box-shadow: 1px 5px 5px #C6D0D9;
    }

    .color-item:hover, .selected {
      transform: scale(1.3);
    }`;

    shadow.append(style);
    shadow.append(wrapper);
  }
}

window.customElements.define('color-selector', ColorSelector);