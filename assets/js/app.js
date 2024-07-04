'use strict';

import EntryContainer from './entry-container.js';
import InputForm from './input-form.js';
import LoginForm from './login-form.js';
import User from './user.js';

export default class App extends HTMLElement {
  constructor(){
    super();

    const user = new User();
    if(!user.userName && !user.password){
      // load login page
      const loginForm = new LoginForm();
      this.append(loginForm);
    }else{
      // load dashboard page
      const inputForm = new InputForm();
      const entryContainer = new EntryContainer();
      this.append(inputForm, entryContainer);
    }
  }
}

window.customElements.define('app-content', App);