'use strict';

import Entry from './entry.js';
import CRUD from './crud.js';
import User from './user.js';
import AppText from './appText.js';

export default class EntryContainer extends HTMLElement {
  constructor(){
    super();
    // retrieve data
    const data = new CRUD(new User().userName).readEntries();
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    const entryContainer = document.createElement('div');
    entryContainer.setAttribute('class', 'grid');
    // display entry list
    if(data.length != 0){
      data.forEach(elem => {
        const entry = new Entry(elem.id, elem.title, elem.content, elem.date, elem.color, this.onUpdate, this.onDelete);
        entryContainer.appendChild(entry);
      });
    }else{
      // if there is no list, display placeholder
      const appText = new AppText();
      const placeholder = `<p class="placeholder">${appText.string.emptyListPlaceholderText}</p>`
      wrapper.innerHTML = placeholder;
    }
    // create layout
    wrapper.appendChild(entryContainer);
    this.appendChild(wrapper); 
  }

  onUpdate(id, title, content, date, color){
    new CRUD(new User().userName).updateEntry(id, title, content, date, color);
    // reload browser to update view
    location.reload(true);
  }

  onDelete(id){
    new CRUD(new User().userName).deleteEntry(id);
    // reload browser to update view
    location.reload(true);
  }
}

window.customElements.define('entry-container', EntryContainer);