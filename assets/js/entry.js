
export default class Entry extends HTMLElement {

  constructor(id, title, content, date, onEdit, onDelete) {
    // Always call super first in constructor
    super();
    
    const shadow = this;
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'entry');
    const titleElem = document.createElement('h2');
    titleElem.textContent = title;
    const contentElem = document.createElement('p');
    contentElem.textContent = content;
    const dateElem = document.createElement('span');
    dateElem.textContent = date;
    const btnContainer = document.createElement('div');
    // edit entry
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {onEdit(id)});
    // delete entry
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.addEventListener('click', () => {onDelete(id)});
    btnContainer.append(editBtn, delBtn);
    wrapper.append(titleElem, contentElem, dateElem, btnContainer);
    shadow.appendChild(wrapper);
  }

  connectedCallback() {
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  observedAttributes() {
    return ["title", "content", "date"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Custom element attributes changed.");
    console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
  }
}

window.customElements.define('cus-entry', Entry);