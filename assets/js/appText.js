import { loadData, saveData } from "./crud.js";
import languages from "../data/languages.js";

const LANGUAGE_KEY = 'language';
export default class AppText {
  constructor(){
    this.en = 'en';
    this.kh = 'kh';
    let lang = loadData(LANGUAGE_KEY);
    if(lang != null){
      this.lang = lang.language;
    }else{
      this.lang = this.en
    }

    this.string = languages[this.lang];

    this.fullLangText = {
      en: 'English',
      kh: 'ខ្មែរ',
    }
  }

  getLang(){
    return this.lang;
  }

  getFullLangText(){
    return this.fullLangText[this.lang];
  }

  switchLang(){
    if(this.lang == this.en){
      this.lang = this.kh;
    }else{
      this.lang = this.en;
    }
    saveData(LANGUAGE_KEY, {language: this.lang});
  }
  getNextFullLangText(){
    if(this.lang == this.en){
      return this.fullLangText[this.kh];
    }else{
      return this.fullLangText[this.en];
    }
  }
}