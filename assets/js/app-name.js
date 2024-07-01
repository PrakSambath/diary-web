export default class AppName extends HTMLElement {
  constructor(){
    super();
    const APP_NAME = 'Diary Application';
    const header = `<span class="app-name">${APP_NAME}</span>`;
    this.innerHTML = header;
  }
}

window.customElements.define('app-name', AppName);