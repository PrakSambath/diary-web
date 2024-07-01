export default class Header extends HTMLElement {
  constructor(){
    super();
    const APP_NAME = 'Diary Application';
    const header = `<div class="container"><h1>${APP_NAME}</h1></div>`;
    this.innerHTML = header;
  }
}

window.customElements.define('cus-header', Header);