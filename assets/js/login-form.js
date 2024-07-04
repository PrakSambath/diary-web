'use strict';

import Button from '../components/button.js';
import Input from '../components/input.js';
import User from './user.js';

export default class LoginForm extends HTMLElement {
  constructor(){
    super();

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
    const signUpBtn = new Button('Sign up', 'button', 'btn disabled');
    signUpBtn.setAttribute('disabled', '');
    const signInBtn = new Button('Sign in', 'button', 'btn ');
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';
    const userNameInput = new Input('text', 'username', '', 'Username');
    const passwordInput = new Input('password', 'password', '', 'Password');
    const ctaWrapper = document.createElement('div');
    ctaWrapper.className = 'cta-wrapper';
    const registerBtn = new Button('Register', 'button', 'btn-secondary rounded');

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
          alert('Username is already taken or exists.');
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
    const signUpBtn = new Button('Sign up', 'button', 'btn');
    const signInBtn = new Button('Sign in', 'button', 'btn disabled');
    signInBtn.setAttribute('disabled', '');
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';
    const userNameInput = new Input('text', 'username', '', 'Username');
    const passwordInput = new Input('password', 'password', '', 'Password');
    const ctaWrapper = document.createElement('div');
    ctaWrapper.className = 'cta-wrapper';
    const loginBtn = new Button('Login', 'button', 'btn-secondary rounded');

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
          alert('Incorrect username or password.');
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