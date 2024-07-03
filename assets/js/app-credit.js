export default class AppCredit extends HTMLElement {
  constructor(){
    super();
    const DEVELOPER = 'Sambath PRAK';
    const header = `<span class="app-credit">${DEVELOPER}</span>`;
    this.innerHTML = header;
  }
}

window.customElements.define('app-credit', AppCredit);