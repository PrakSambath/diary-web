'use strict';

import {loadData, saveData} from './crud.js';

const ACCOUNT = 'accounts';
const LOGIN = 'login';
export default class User {
  constructor(){
    this.userName = null;
    this.password = null;
    this.loggedin = false;
    // check user has logged in
    const loginInfo = loadData(LOGIN);
    if(loginInfo != null){
      if(loginInfo.userName && loginInfo.password){
        this.userName = loginInfo.userName;
        this.password = loginInfo.password;
        this.loggedin = true;
      }
    }
  }

  isLogin() {
    return this.loggedin;
  }

  // login user
  login(userName, password){
    let accounts = loadData(ACCOUNT);
    let isSuccess = false;
    if(accounts != null){
      accounts.forEach(acc => {
        if(acc.userName == userName && acc.password == password){
          this.userName = userName;
          this.password = password;
          isSuccess = true;
          saveData(LOGIN, {userName, password});
          this.loggedin = true;
        }
      });
    }
    return isSuccess;
  }

  // register new user
  register(userName, password){
    let accounts = loadData(ACCOUNT);
    if(accounts == null){
      accounts = [];
    }

    // avoid duplicate reserved app data key
    let isUserExist = userName == ACCOUNT || userName == LOGIN;
    // if username exist
    accounts.forEach((elem) => {
      if(elem.userName == userName){
        isUserExist = true;
      }
    });

    // if username not exist
    if(!isUserExist){
      const date = new Date().toDateString();
      accounts.unshift({userName, password, date});
      saveData(ACCOUNT, accounts);
      saveData(userName, []);
      saveData(LOGIN, {userName, password})
      this.loggedin = true;
      return true;
    }
    return false;
  }

  // logout user
  logout() {
    // clear login data
    saveData(LOGIN, {});
    this.loggedin = false;
  }
}