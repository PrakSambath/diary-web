export default class Footer extends HTMLElement {
  constructor(){
    super();
    const DEVELOPER = 'Sambath PRAK';
    const header = `<div class="container"><p> Developer : <span>${DEVELOPER}</span></p></div>`;
    this.innerHTML = header;
  }
}

window.customElements.define('cus-footer', Footer);