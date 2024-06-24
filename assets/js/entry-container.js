import Entry from './entry.js';
import {updateEntry, deleteEntry} from './crud.js';

const data = [
  {
    "id": 1,
    "title": "Title1",
    "content": "Content1",
    "date": "06/23/24"
  },
  {
    "id": 2,
    "title": "Title2",
    "content": "Content2",
    "date": "06/23/24"
  },
  {
    "id": 3,
    "title": "Title3",
    "content": "Content3",
    "date": "06/23/24"
  },
  {
    "id": 4,
    "title": "Title4",
    "content": "Content4",
    "date": "06/23/24"
  },
  {
    "id": 5,
    "title": "Title5",
    "content": "Content5",
    "date": "06/23/24"
  }
];

export default class EntryContainer extends HTMLElement {
  constructor(){
    super();
    const shadow = this.attachShadow({mode : 'open'});
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'entry-container');
    data.forEach(elem => {
      const entry = new Entry(elem.id, elem.title, elem.content, elem.date, this.onUpdate, this.onDelete);
      wrapper.appendChild(entry);
    });
    const style = document.createElement("style");
    style.textContent = `
    h2 {
    color: red;
    }
    `;
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }

  onUpdate(id){
    updateEntry(id);
  }

  onDelete(id){
    deleteEntry(id);
  }
}

window.customElements.define('entry-container', EntryContainer);

