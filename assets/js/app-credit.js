'use strict';

import AppText from "./appText.js";

export default class AppCredit extends HTMLElement {
  constructor(){
    super();
    const appText = new AppText();
    const header = `<span class="app-credit">${appText.string.appCredit}</span>`;
    this.innerHTML = header;
  }
}

window.customElements.define('app-credit', AppCredit);