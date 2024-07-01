import Button from '../components/button.js';
import Entry from './entry.js';
import {readEntries} from './crud.js';


export default class EntryContainer extends HTMLElement {
  constructor(){
    super();
        // retrieve data
        const data = readEntries();
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
        const entryContainer = document.createElement('div');
        entryContainer.setAttribute('class', 'grid');
        if(data.length != 0){
          data.forEach(elem => {
            const entry = new Entry(elem.id, elem.title, elem.content, elem.date, elem.themeColor);
            entryContainer.appendChild(entry);
          });
        }else{
          // display placeholder
          const placeholder = `<p class="placeholder">Click on the plus icon to create a new list</p>`
          wrapper.innerHTML = placeholder;
        }
        wrapper.appendChild(entryContainer);
        this.appendChild(wrapper); 
  }
}

window.customElements.define('entry-container', EntryContainer);

