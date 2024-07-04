'use strict';

import Button from '../components/button.js';
import Input from '../components/input.js';
import AppText from './appText.js';
import User from './user.js';

export default class LoginForm extends HTMLElement {
  constructor(){
    super();

    this.appText = new AppText();

    // show sign in form by default
    this.isSignIn = true;

    // set layout style
    this.className = 'login-form grid';
    this.updateLayout();
  }

  getSignUpLayout(){
    // sign up element
    const formTab = document.createElement('form');
    formTab.className = 'sign-up-form login-form-wrapper';
    const tabWrapper = document.createElement('div');
    tabWrapper.className = 'tab-wrapper';
    const signUpBtn = new Button(this.appText.string.signUp, 'button', 'btn disabled');
    signUpBtn.setAttribute('disabled', '');
    const signInBtn = new Button(this.appText.string.signIn, 'button', 'btn ');
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';
    const userNameInput = new Input('text', 'username', '', this.appText.string.userName);
    const passwordInput = new Input('password', 'password', '', this.appText.string.password);
    const ctaWrapper = document.createElement('div');
    ctaWrapper.className = 'cta-wrapper';
    const registerBtn = new Button(this.appText.string.register, 'button', 'btn-secondary rounded');

    // show sign in form
    signInBtn.addEventListener('click', () => {
      this.isSignIn = true;
      this.updateLayout();
    });

    // register new user
    registerBtn.addEventListener('click', () => {
      const userName = userNameInput.getValue();
      const password = passwordInput.getValue();
      if(userName && password){
        const user = new User();
        const isSuccess = user.register(userName, password);
        if(isSuccess){
          formTab.submit();
        }else{
          alert(this.appText.string.userExistMsg);
        }
      }
    });

    // create form layout
    tabWrapper.append(signUpBtn, signInBtn);
    inputWrapper.append(userNameInput, passwordInput);
    ctaWrapper.append(registerBtn);

    formTab.append(tabWrapper, inputWrapper, ctaWrapper);
    return formTab;

  }

  getSignInLayout(){
    // sign in element
    const formTab = document.createElement('form');
    formTab.className = 'sign-in-form login-form-wrapper';
    const tabWrapper = document.createElement('div');
    tabWrapper.className = 'tab-wrapper';
    const signUpBtn = new Button(this.appText.string.signUp, 'button', 'btn');
    const signInBtn = new Button(this.appText.string.signIn, 'button', 'btn disabled');
    signInBtn.setAttribute('disabled', '');
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';
    const userNameInput = new Input('text', 'username', '', this.appText.string.userName);
    const passwordInput = new Input('password', 'password', '', this.appText.string.password);
    const ctaWrapper = document.createElement('div');
    ctaWrapper.className = 'cta-wrapper';
    const loginBtn = new Button(this.appText.string.login, 'button', 'btn-secondary rounded');

    // show sign up form
    signUpBtn.addEventListener('click', () => {
      this.isSignIn = false;
      this.updateLayout();
    });

    // login user
    loginBtn.addEventListener('click', (event => {
      const userName = userNameInput.getValue();
      const password = passwordInput.getValue();
      if(userName && password){
        const user = new User();
        const isSuccess = user.login(userName, password);
        if(isSuccess){
          formTab.submit();
        }else{
          alert(this.appText.string.incorrectPasswordMsg);
        }
      }
    }));

    // create form layout
    tabWrapper.append(signUpBtn, signInBtn);
    inputWrapper.append(userNameInput, passwordInput);
    ctaWrapper.append(loginBtn);

    formTab.append(tabWrapper, inputWrapper, ctaWrapper);
    return formTab;
  }

  updateLayout(){
    // chosse form layout
    let formLayout = null;
    if(this.isSignIn){
      formLayout = this.getSignInLayout();
    }else{
      formLayout = this.getSignUpLayout();
    }

    // clear previus layout
    this.innerHTML = '';
    // insert new layout
    this.append(formLayout);
  }
}

window.customElements.define('login-form', LoginForm);