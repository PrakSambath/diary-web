'use strict';

import Button from '../components/button.js';
import AppText from './appText.js';
import CRUD from './crud.js';
import User from './user.js';

export default class UserProfile extends HTMLElement {
  constructor(){
    super();
    this.appText = new AppText();
    const user = new User();
    if(user.loggedin){
      // create layout element
      const accountProfile = document.createElement('div');
      accountProfile.className = 'user-profile';

      // show/hide dashboard
      const userBtn = new Button(this.appText.string.user, 'button', 'btn-secondary rounded user-btn');
      userBtn.addEventListener('click', () => {
        dashboard.classList.toggle('hidden');
      });

      // user dashboard
      const dashboard = document.createElement('sidebar');
      dashboard.className = 'user-dashboard card hidden';
      const userInfo = document.createElement('div');
      userInfo.className = 'user-info';
      const entryNumber = new CRUD(user.userName).readEntries().length;
      userInfo.innerHTML = `
      <span class="user-name">${user.userName}</span>
      <span class="entry-number">${entryNumber}</span>`;

      // log out user
      const logoutBtn = new Button(this.appText.string.logout, 'button', 'btn-logout btn-secondary rounded');
      logoutBtn.addEventListener('click', () => {
        user.logout();
        // refresh app
        window.location.reload();
      });

      // create layout
      dashboard.append(userInfo, logoutBtn);
      accountProfile.append(userBtn, dashboard);
      this.appendChild(accountProfile);
    }
  }
}

window.customElements.define('user-profile', UserProfile);