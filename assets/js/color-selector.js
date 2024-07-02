import colors from "../data/colors.js";

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
      colorElem.style.backgroundColor = elem.colorCode;
      if(prevSelected == null){
        prevSelected = colorElem;
      }
      if(elem.colorCode == this.selectedColor){
        colorElem.classList.add('selected');
      }
      colorElem.addEventListener('click', (event) => {
        this.selectedColor = elem.colorCode;
        prevSelected.classList.remove('selected');
        event.currentTarget.classList.add('selected')
        prevSelected = event.currentTarget;
      });
      wrapper.append(colorElem);
    });

    this.getValue = () => {return this.selectedColor};

    const style = document.createElement('style');
    style.innerHTML = `

    .color-selector {
      display: flex;
      gap: 16px;
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
    }

    .selected {
      border: 1px solid #000;
    }
    `;
    shadow.append(style);
    shadow.append(wrapper);
  }
}

window.customElements.define('color-selector', ColorSelector);