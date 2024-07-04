'use strict';

import AppText from "./appText.js";

export default class AppName extends HTMLElement {
  constructor(){
    super();
    const appText = new AppText();
    // const APP_NAME = 'Diary Application';
    const header = `<span class="app-name">${appText.string.appName}</span>`;
    this.innerHTML = header;
  }
}

window.customElements.define('app-name', AppName);