import Button from "../components/button.js";
import CRUD from "./crud.js";
import User from "./user.js";

export default class UserProfile extends HTMLElement {
  constructor(){
    super();
    const user = new User();
    if(user.loggedin){
      // create layout element
      const accountProfile = document.createElement('div');
      accountProfile.className = 'user-profile';

      const userBtn = new Button('User', 'button', 'btn-secondary rounded user-btn');
      
      // show/hide dashboard
      userBtn.addEventListener('click', () => {
        dashboard.classList.toggle('hidden');
      });
      
      // user dashboard
      const dashboard = document.createElement('div');
      dashboard.className = 'user-dashboard hidden';
      const userInfo = document.createElement('div');
      userInfo.className = 'user-info';
      const entryNumber = new CRUD(user.userName).readEntries().length;
      userInfo.innerHTML = `<span class="user-name">${user.userName}</span><span class="entry-number">${entryNumber}</span>`;
      const logoutBtn = new Button('Log out', 'button', 'btn-secondary rounded');
      // log out user
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