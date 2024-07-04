import Button from "../components/button.js";
import AppText from "./appText.js";

export default class LanguageSupport extends HTMLElement {
  constructor(){
    super();
    this.appText =  new AppText();
    const langBtn = new Button(this.appText.getNextFullLangText(), 'button', 'btn-secondary rounded');
    langBtn.addEventListener('click', () => {
      this.appText.switchLang();
      location.reload();
    });
    this.append(langBtn);
  }
}

window.customElements.define('language-support', LanguageSupport);
